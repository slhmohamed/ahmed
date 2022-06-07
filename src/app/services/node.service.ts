import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class NodeService { 

  API_URI = 'http://localhost:8000/store/nodes';
    constructor(private http: HttpClient) { }
 

getAllNode( ){
  return this.http.get<any>(`${this.API_URI}/`)
}
addNode(resource:any){
  return this.http.post(`${this.API_URI}/`,resource);
}
updateNode(id:any,resource:any){
  return this.http.put(`${this.API_URI}/${id}`,resource); 
}
getNode(id:any){
    return this.http.get(`${this.API_URI}/${id}`);   
}
deleteNode(id:any){
    return this.http.delete(`${this.API_URI}/${id}`);   
}
   
}