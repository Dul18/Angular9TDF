import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }

  msgTrue = false;
  contactList : any;

  ngOnInit(): void {

     this.contactsService.getContacts().subscribe(data =>{

      this.contactList = data;
     });

     
  }

  addNewContact(){

    const newFormData={id:6, firstName: 'Raj', lastName:'Kumar'}

    this.contactsService.createContact(newFormData).subscribe(data =>{
      console.log(data);
      this.msgTrue=true;
    });

   }

}
