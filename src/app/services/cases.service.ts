import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class CasesService { 

  API_URI = 'http://localhost:8000/store/cases';
    constructor(private http: HttpClient) { }
 

getAllCases( ){
  return this.http.get<any>(`${this.API_URI}/`)
}
addCases(resource:any){
  return this.http.post(`${this.API_URI}/`,resource);
}
updateCases(id:any,resource:any){
  return this.http.put(`${this.API_URI}/${id}`,resource); 
}
getCases(id:any){
    return this.http.get(`${this.API_URI}/${id}`);   
}

deleteCases(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);   
}
   
}