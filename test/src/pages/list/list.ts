import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CampusServiceProvider } from '../../providers/campus-service';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  
  users: any;
  
  constructor(public navCtrl: NavController, public campuservice: CampusServiceProvider) {
    this.getUsers();
  }

  getUsers() {
    this.campuservice.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
