import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class StatusService { 

  API_URI = 'http://localhost:8000/store/status';
    constructor(private http: HttpClient) { }
 

getAllStatus( ){
  return this.http.get<any>(`${this.API_URI}/`)
}
addStatus(resource:any){
  return this.http.post(`${this.API_URI}/`,resource);
}
updateStatus(id:any,resource:any){
  return this.http.put(`${this.API_URI}/${id}`,resource); 
}
getStatus(id:any){
    return this.http.get(`${this.API_URI}/${id}`);   
}
deleteStatus(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);   
}
   
}