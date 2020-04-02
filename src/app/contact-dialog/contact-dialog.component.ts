import { Component, OnInit, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from '../models/server';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  contact: Contact;

  // constructor(/*@Inject(MAT_DIALOG_DATA*/) contact: Contact,
  //             private dialogRef: MatDialogRef<ContactDialogComponent>) {
  //   this.contact = contact;
   // }

  ngOnInit() {

  }

//   close() {
//     this.dialogRef.close();
// }

}
