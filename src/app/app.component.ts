import { Observable } from 'rxjs';
import { ContactService } from './services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from './models/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(){
    this.contacts$ = this.contactService.getContacts();
  }

}
