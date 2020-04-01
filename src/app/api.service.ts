import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
baseUrl='http://localhost:3000';
get(){
  return this.http.get(this.baseUrl + '/employee/get');
}
post(data){
  return this.http.post(this.baseUrl + '/employee/create',data)
}
delete(id){
return this.http.post(this.baseUrl +'/employee/delete',id);
}
update(data){
  return this.http.put(this.baseUrl + '/employee/update',data)

}

}
