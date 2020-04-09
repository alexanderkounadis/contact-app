import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  // the appearance of this component is in direct dependency
  // with the contacts service
  isLoading: Subject<boolean> = this.contactsService.contactsReceived;
  constructor(private contactsService: ContactService){}

  ngOnInit(){
  }
}
