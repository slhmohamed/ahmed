import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class SeviritiesService { 

  API_URI = 'http://localhost:8000/store/sevirities';
    constructor(private http: HttpClient) { }
 

getAllServities( ){
  return this.http.get<any>(`${this.API_URI}/`)
}
addServities(resource:any){
  return this.http.post(`${this.API_URI}/`,resource);
}
updateServities(id:any,resource:any){
  return this.http.put(`${this.API_URI}/${id}`,resource); 
}
getServities(id:any){
    return this.http.get(`${this.API_URI}/${id}`);   
}
deleteServities(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);   
}
   
}