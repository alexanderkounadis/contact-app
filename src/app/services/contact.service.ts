import { Contact } from "./../models/server";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  private contactsUrl = "http://jsonplaceholder.typicode.com/users"; // URL to web api
  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(this.contactsUrl + "/" + id);
  }

  updateContact(id: number, newContact: Contact): Observable<Contact> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.patch<Contact>(this.contactsUrl + "/" + id, {
      name: newContact.name,
      username: newContact.username,
      email: newContact.email,
      address: {
        street: newContact.address.street,
        suite: newContact.address.suite,
        city: newContact.address.city,
        zipcode: newContact.address.zipcode,
        geo: {
          lat: newContact.address.geo.lat,
          lon: newContact.address.geo.lon
        }
      },
      phone: newContact.phone,
      website: newContact.website,
      company: {
        name: newContact.company.name,
        catchPhrase: newContact.company.catchPhrase,
        bs: newContact.company.bs
      }
    });
  }

  deleteContact(id: number) {
    return this.http.delete(this.contactsUrl + "/" + id);
  }

  createContact(newContact: Contact): Observable<Contact> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post<Contact>(this.contactsUrl + "/", {
      name: newContact.name,
      username: newContact.username,
      email: newContact.email,
      address: {
        street: newContact.address.street,
        suite: newContact.address.suite,
        city: newContact.address.city,
        zipcode: newContact.address.zipcode,
        geo: {
          lat: newContact.address.geo.lat,
          lon: newContact.address.geo.lon
        }
      },
      phone: newContact.phone,
      website: newContact.website,
      company: {
        name: newContact.company.name,
        catchPhrase: newContact.company.catchPhrase,
        bs: newContact.company.bs
      }
    });
  }
}
