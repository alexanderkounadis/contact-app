import { Contact } from "./../models/server";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  contactsChanged = new Subject<Contact[]>();
  contactsReceived = new Subject<boolean>();
  private contacts: Contact[] = [];

  private contactsUrl = "http://jsonplaceholder.typicode.com/users"; // URL to web api

  constructor(private http: HttpClient) {}

  getContacts(): Contact[] {
    this.http
      .get<Contact[]>(this.contactsUrl)
      .pipe(delay(1000))
      .subscribe(data => {
        this.contacts.push(...data);
        this.contactsChanged.next(this.contacts);
        this.contactsReceived.next(true);
      });
    return this.contacts;
  }

  getContact(id: number): Contact {
    return this.contacts.slice()[id];
  }

  updateContact(id: number, newContact: Contact) {
    var foundIndex = this.contacts.findIndex(x => x.id == id);
    this.contacts[foundIndex] = newContact;
    this.contactsChanged.next(this.contacts.slice());
  }

  deleteContact(id: number) {
    var foundIndex = this.contacts.findIndex(x => x.id == id);
    this.contacts.splice(foundIndex, 1);
    this.contactsChanged.next(this.contacts.slice());
  }

  createContact(newContact: Contact) {
    this.contacts.push(newContact);
    this.contactsChanged.next(this.contacts.slice());
  }
}
