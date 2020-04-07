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
  private contactsChangedSub = new Subscription();
  contacts: Contact[];
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
    this.contactsChangedSub = this.contactService.contactsChanged.subscribe(
      (newContacts: Contact[]) => {
        this.contacts = newContacts;
        this.counter = this.contacts.length;
      }
    );
    this.contacts = this.contactService.getContacts();
    this.filteredContacts = this.contacts;
  }

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
