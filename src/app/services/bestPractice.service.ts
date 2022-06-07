import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class BestService { 

  API_URI = 'http://localhost:8000/store/bestPractises';
    constructor(private http: HttpClient) { }
 

getAllBest( ){
  return this.http.get<any>(`${this.API_URI}/`)
}
addBest(resource:any){
  return this.http.post(`${this.API_URI}/`,resource);
}
updateBest(id:any,resource:any){
  return this.http.put(`${this.API_URI}/${id}`,resource); 
}
getBest(id:any){
    return this.http.get(`${this.API_URI}/${id}`);   
}

deleteBest(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);   
}
   
}