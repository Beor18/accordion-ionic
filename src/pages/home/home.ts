import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  public options;
  public headers: Headers;
  posts:any;

  constructor(public navCtrl: NavController, public http:Http) {

    
    this.http.get("http://www.flybynet.org/wp-json/wp/v2/posts", this.options).map((res:Response) => res.json()).subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

}