import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoggingInterceptor} from './logging.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CheckoutComponent,
    ObservableComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
