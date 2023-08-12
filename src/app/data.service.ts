import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INinjas } from './ninjas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getNinjas(): Observable<INinjas[]> {
    return this.http.get<INinjas[]>('../assets/ninjas.json');
  }
}
