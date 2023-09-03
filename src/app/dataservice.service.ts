import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
  addData(data:any){
    return this.http.post('http://localhost:3000/students', data);
  }
  getData(){
    return this.http.get('http://localhost:3000/students');
  }
}
