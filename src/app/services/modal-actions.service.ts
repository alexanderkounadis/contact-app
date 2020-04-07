import { ContactService } from "./contact.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModalActionsService {
  constructor(private contactService: ContactService) {}

  // This function is the only way this service is directly called in the modal.
  // The modal passes to it the received `data` object and then this function\
  // calls the appropriate function based on the name of the modal. Then, that\
  // function receives whatever values it needs that were included in `data`
  modalAction(modalData: any) {
    switch (modalData.title) {
      case "add":
        this.contactService.createContact(modalData.contact);
        break;
      case "update":
        this.contactService.updateContact(
          modalData.contact.id,
          modalData.contact
        );
        break;
        case "delete":
          this.contactService.deleteContact(modalData.contact.id)
          break;
      default:
        break;
    }
  }
}
