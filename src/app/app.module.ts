import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-list/contact-item/contact-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionClickCatcherDirective } from './directives/accordion-click-catcher.directive';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      SearchComponent,
      ContactListComponent,
      ContactItemComponent,
      ContactDialogComponent,
      AccordionClickCatcherDirective,
      LoaderComponent
   ],
   entryComponents: [
      ContactDialogComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatExpansionModule,
      MatDialogModule,
      FormsModule,
      ReactiveFormsModule,
      MatProgressSpinnerModule
   ],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
