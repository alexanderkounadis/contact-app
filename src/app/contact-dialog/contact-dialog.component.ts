import { ModalActionsService } from "./../services/modal-actions.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Contact } from "../models/server";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-dialog",
  templateUrl: "./contact-dialog.component.html",
  styleUrls: ["./contact-dialog.component.scss"]
})
export class ContactDialogComponent implements OnInit {
  contactForm: FormGroup;
  contact: Contact;
  header: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private dialogRef: MatDialogRef<ContactDialogComponent>,
    private modalService: ModalActionsService
  ) {}

  ngOnInit() {
    this.initForm();
    this.header = this.setHeader();
  }

  private setHeader() {
    if (this.modalData.title === "add") {
      return "Add Member";
    } else if (this.modalData.title === "update") {
      return "Edit Member";
    } else {
      return "Delete Member";
    }
  }
  onClose() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.modalData.contact = this.contactForm.value;
    this.modalService.modalAction(this.modalData);
    this.onClose();
  }

  private initForm() {
    if (this.modalData.title === "add") {
      this.contactForm = new FormGroup({
        id: new FormControl(null),
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        address: new FormGroup({
          street: new FormControl("", Validators.required),
          suite: new FormControl("", Validators.required),
          city: new FormControl("", Validators.required),
          zipcode: new FormControl("", Validators.required)
        })
      });
    } else if (this.modalData.title === "update" || "delete") {
      this.contactForm = new FormGroup({
        id: new FormControl(this.modalData.contact.id),
        name: new FormControl(this.modalData.contact.name, Validators.required),
        email: new FormControl(this.modalData.contact.email, [
          Validators.required,
          Validators.email
        ]),
        address: new FormGroup({
          street: new FormControl(
            this.modalData.contact.address.street,
            Validators.required
          ),
          suite: new FormControl(
            this.modalData.contact.address.suite,
            Validators.required
          ),
          city: new FormControl(
            this.modalData.contact.address.city,
            Validators.required
          ),
          zipcode: new FormControl(
            this.modalData.contact.address.zipcode,
            Validators.required
          )
        })
      });
    }
  }
}
