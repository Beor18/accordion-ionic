import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];

  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((data) => {
      
      //Json Users
      this.users = data.json();
      console.log(this.users);
    })

  }

}