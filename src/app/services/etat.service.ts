import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class EtatService { 

  API_URI = 'http://localhost:8000/store/etats';
    constructor(private http: HttpClient) { }
 

getAllEtat( ){
  return this.http.get<any>(`${this.API_URI}/`)
}
addEtat(resource:any){
  return this.http.post(`${this.API_URI}/`,resource);
}
updateEtat(id:any,resource:any){
  return this.http.put(`${this.API_URI}/${id}`,resource); 
}
getEtat(id:any){
    return this.http.get(`${this.API_URI}/${id}`);   
}

deleteEtat(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);   
}
   
}