import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetService {

  HostAPI = environment.HostAPI;
  BaseAPI = environment.BaseApi;

  constructor(private http:HttpClient) { }

  getData(){
    console.log('called')
    return this.http.get(`${this.HostAPI}${this.BaseAPI}users?delay=3`);
  }
  getIndividual(id:number){
    return this.http.get(`${this.HostAPI}${this.BaseAPI}users/${id}`);
  }
}
