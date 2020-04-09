import { Contact } from "./../models/server";
import { ContactDialogComponent } from "./../contact-dialog/contact-dialog.component";
import { ContactService } from "./../services/contact.service";
import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from "@angular/core";
import { filter, tap } from "rxjs/operators";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Subscription } from "rxjs";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit, OnDestroy {
  // this subscription subscribes to our services actions that change
  // our contact list in order to keep our contact list up to date
  private contactsChangedSub = new Subscription();

  contacts: Contact[];

  // contacts filtered according to user input in search field
  filteredContacts: Contact[];

  counter: number;
  @Output() private contactChanged = new EventEmitter();

  private _searchText: string;
  get searchText(): string {
    return this._searchText;
  }
  set searchText(text: string) {
    this._searchText = text;
    this.filteredContacts = this.filterContacts(text);
  }

  // return contacts filtered by user's search input text
  filterContacts(searchTerm: string) {
    return this.contacts.filter(
      contact =>
        contact.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }

  constructor(
    private dialog: MatDialog,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    // subscribe to contact list changes in order to keep our ui in sync
    // with our data changes
    this.contactsChangedSub = this.contactService.contactsChanged.subscribe(
      (newContacts: Contact[]) => {
        this.contacts = newContacts;
        this.counter = this.contacts.length;
      }
    );
    // get contact list on load
    this.contacts = this.contactService.getContacts();
    this.filteredContacts = this.contacts;
  }

  // to prevent memory leaks kill the subscriptions
  // when the component is unloaded
  ngOnDestroy() {
    this.contactsChangedSub.unsubscribe();
  }

  editContact(contact: Contact) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = contact;

    const dialogRef = this.dialog.open(ContactDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter(changes => !!changes),
        tap(() => this.contactChanged.emit())
      )
      .subscribe();
  }
}
