import { ContactDialogComponent } from './../contact-dialog/contact-dialog.component';
import { ContactService } from './../services/contact.service';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/server';
import {filter, tap} from 'rxjs/operators';
import { Subject } from 'rxjs';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {

  @Input() contacts: Contact[];
  @Output() private contactChanged = new EventEmitter();

  constructor(/*private dialog: MatDialog*/) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  editContact(contact: Contact) {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = "400px";
    // dialogConfig.data = contact;

    // const dialogRef = this.dialog.open(ContactDialogComponent, dialogConfig);

    // dialogRef.afterClosed()
    //   .pipe(
    //     filter(changes => !!changes),
    //     tap(() => this.contactChanged.emit())
    //   ).subscribe();
  }
}
