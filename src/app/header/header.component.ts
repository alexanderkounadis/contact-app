import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  contactAdded = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onAddMember() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.data = {
      title: "add",
      contact: null
    }
    const dialogRef = this.dialog.open(ContactDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter(changes => !!changes),
        tap(() => this.contactAdded.emit())
      )
      .subscribe();
  }
  }
