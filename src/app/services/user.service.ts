import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService { 

  API_URI = 'http://localhost:8000/user';
    constructor(private http: HttpClient) { }
   getAllUser(){
    return this.http.get<any>(`${this.API_URI}/`)
   }
 
}