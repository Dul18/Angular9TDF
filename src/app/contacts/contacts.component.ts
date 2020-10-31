import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }


  contactList : any;

  ngOnInit(): void {

     this.contactsService.getContacts().subscribe(data =>{

      this.contactList = data;
     });
  }

}
