import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient : HttpClient) { }
  
    public getlistgouvernoratws() {
      return this.httpClient.get('http://localhost/gouvernorat/listgouvernoratws');
  }
}
