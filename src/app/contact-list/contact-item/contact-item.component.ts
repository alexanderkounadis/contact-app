import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { Contact } from "src/app/models/server";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { ContactDialogComponent } from "src/app/contact-dialog/contact-dialog.component";
import { filter, tap } from "rxjs/operators";

@Component({
  selector: "app-contact-item",
  templateUrl: "./contact-item.component.html",
  styleUrls: ["./contact-item.component.scss"]
})
export class ContactItemComponent implements OnInit {
  contactUpdated = new EventEmitter();
  @Input() contact: Contact;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  onEditMember() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.data = {
      // data for the modal customization (title etc)
      title: "update",
      contact: this.contact
    };
    const dialogRef = this.dialog.open(ContactDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter(changes => !!changes),
        tap(() => this.contactUpdated.emit())
      )
      .subscribe();
  }

  onDeleteMember() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.data = {
      title: "delete",
      contact: this.contact
    };
    const dialogRef = this.dialog.open(ContactDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter(changes => !!changes),
        tap(() => this.contactUpdated.emit())
      )
      .subscribe();
  }
}
