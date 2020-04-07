import { Observable, pipe, Subscription } from 'rxjs';
import { ContactService } from './services/contact.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from './models/server';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  contactCounterSubscription = new Subscription();
  counter: number;


  constructor(private contactService: ContactService) {
  }
  ngOnDestroy(): void {
    this.contactCounterSubscription.unsubscribe();
  }

  ngOnInit(){
    this.contactCounterSubscription = this.contactService.contactsChanged.subscribe(data => {
      this.counter = data.length;
    });
  }

}
