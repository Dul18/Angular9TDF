import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(){

    const contactList= [

      {contactId:1, contactName: 'Arc'},
      {contactId:1, contactName: 'Tutorial'},
      {contactId:1, contactName: 'YouTube'},
      {contactId:1, contactName: 'Angular'}

    ];


    return contactList;
  }
}
