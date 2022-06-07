import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class ActionService { 

  API_URI = 'http://localhost:8000/store/actions';
    constructor(private http: HttpClient) { }
 

getAllAction( ){
  return this.http.get<any>(`${this.API_URI}/`)
}
addAction(resource:any){
  return this.http.post(`${this.API_URI}/`,resource);
}
updateAction(id:any,resource:any){
  return this.http.put(`${this.API_URI}/${id}`,resource); 
}
getAction(id:any){
    return this.http.get(`${this.API_URI}/${id}`);   
}

deleteAction(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);   
}
   
}