import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css'],
})
export class TablelistComponent implements OnInit {
  constructor(private appComponent: AppComponent) {}
  varhome = 'HomeComponent';
  date = new Date();
  ContactsTabOrgin: Contact[] = [];
  ContactsTab: Contact[] = [];
  upContact: Contact = {};
  editeIndex: number = 0;
  searchText = '';

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.ContactsTab = [
      {
        id: 1,
        nom: 'ACHRAF',
        prenom: 'HARIMZA',
        tel: 665555555,
      },
      {
        id: 2,
        nom: 'BEN MOHAMED',
        prenom: '#2f4860',
        tel: 222222222,
      },
      {
        id: 3,
        nom: 'BEN MOHAMED',
        prenom: '#2f4860',
        tel: 222222222,
      },
    ];
  }
  deleteContact(id: number | undefined) {
    this.ContactsTab = this.ContactsTab.filter((contact) => contact.id != id);
  }

  open(content: any) {
    this.appComponent.open(content);
  }

  editTask(contact: Contact, i: number) {
    // this.upContact = contact;
    this.upContact.id = contact.id;
    this.upContact.nom = contact.nom;
    this.upContact.prenom = contact.prenom;
    this.upContact.tel = contact.tel;
    this.upContact.status = contact.status;
    this.editeIndex = i;
  }

  updateContact() {
    this.ContactsTab[this.editeIndex] = this.upContact;
    this.upContact = {};
  }
  searchContacts() {
    this.ContactsTab = this.ContactsTabOrgin.filter((conatct) =>
      conatct.nom.includes(this.searchText.toLowerCase())
    );
  }
}
