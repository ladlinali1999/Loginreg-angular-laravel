import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient : HttpClient) { }

  getUsersdata(){
    return this.httpclient.get('http://127.0.0.1:8000/api/users');
    }
}
