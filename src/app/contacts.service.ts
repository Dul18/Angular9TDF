import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient ) { }

  getContacts(){

    //Headers
    const httpHeaders = new HttpHeaders({

      'content-type': 'application/json',
      'Authorization': 'Authotutorial$#23'
    });

    //httpHeaders.append('content-type','application/json');

    //get the HTTP GET method working for you
    return this.httpClient.get('http://localhost:3000/contacts',{headers:httpHeaders});

    /*const contactList= [

      {contactId:1, contactName: 'Arc'},
      {contactId:1, contactName: 'Tutorial'},
      {contactId:1, contactName: 'YouTube'},
      {contactId:1, contactName: 'Angular'}

    ];*/


    
  }

  createContact(createBody){

    return this.httpClient.post('http://localhost:3000/contacts', createBody);
  }

  updateContact(contactId,updatedBody){

    const endpointURL = "http://localhost:3000/contacts" +contactId;
    
    return this.httpClient.put(endpointURL, updatedBody);
  }

  deleteContact(contactId){

    const endpointURL = "http://localhost:3000/contacts" +contactId;
    
    return this.httpClient.delete(endpointURL);
  }
}
