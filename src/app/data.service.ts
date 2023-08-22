import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {   }

  getMovies(): Observable<{name:string, imdb:number}[]>{
    return this.http.get<{name:string, imdb:number}[]>('../assets/movies.json');
  }

}
