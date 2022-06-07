import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
  
@Injectable({
  providedIn: 'root'
})
export class AuthService { 

    API_URILogin = 'http://localhost:8000/user';
    API_URIRegister='http://localhost:8000/user'
    constructor(private http: HttpClient) { }
  
   
    login(user: any): any {
      return this.http.post<any>(`${this.API_URILogin}/signin`,user)
      .pipe(map(user => {
             localStorage.setItem('user', JSON.stringify(user));
             return user;
           }));
}

 
  //isLogn:user logeed in or not
  public isLoggedIn(){
    let token=localStorage.getItem('user')
    if(token==undefined||token==''||token==null){
      return false;
    }
    else{
      return true;
    }
  }
  newUser(resource:any){
    return this.http.post<any>(`${this.API_URIRegister}/`,resource)
  }
}