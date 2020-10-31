import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient ) { }

  getContacts(){

    //Headers
    const httpHeaders = new HttpHeaders();

    httpHeaders.append('content-type','application/json');

    //get the HTTP GET method working for you
    return this.httpClient.get('http://localhost:3000/contacts');

    /*const contactList= [

      {contactId:1, contactName: 'Arc'},
      {contactId:1, contactName: 'Tutorial'},
      {contactId:1, contactName: 'YouTube'},
      {contactId:1, contactName: 'Angular'}

    ];*/


    
  }
}
