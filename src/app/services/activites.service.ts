import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class ActivitieService { 

  API_URI = 'http://localhost:8000/store/activities';
    constructor(private http: HttpClient) { }
 

getAllActivites( ){
  return this.http.get<any>(`${this.API_URI}/`)
}
addActivitie(resource:any){
  return this.http.post(`${this.API_URI}/`,resource);
}
updateActivitie(id:any,resource:any){
  return this.http.put(`${this.API_URI}/${id}`,resource); 
}
getActivitie(id:any){
    return this.http.get(`${this.API_URI}/${id}`);   
}

deleteActtivitie(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);   
}
   
}