import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

import 'rxjs/add/operator/map';


@Injectable()

export class UserService {
  public url:string;
  private headers;
  private options;

  constructor(private http:Http, private router:Router) {
    this.url = environment.apiUrl + "/users";
    this.headers = new Headers();
    let token = localStorage.getItem('token')
    
    if ( token ) {
      this.headers.append('Authorization', `${token}`);
      this.options = new RequestOptions({headers: this.headers});
    } else {
      this.router.navigate(['/auth/action/signin']);
    }

  }

  public index() {
    return this.http.get(this.url, this.options)
      .map( res => res.json());
  }

  public show(idCard:string) {
    return this.http.get(this.url + '/' + idCard, this.options)
      .map( res => res.json());
  }

  public store(user:User) {
    return this.http.post(this.url, user, this.options)
      .map( res => res.json());
  }

  public delete(idCard:string) {
    return this.http.delete(this.url + '/' + idCard, this.options)
      .map( res => res.json());
  }

}
