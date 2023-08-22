import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movies : {name: string, imdb: number}[] = [
    {name: 'The Silence of the Lambs', imdb: 8.6},
    {name: 'The Wolf of Wall Street', imdb: 8.2},
    {name: 'Batman Begins', imdb: 8.4},
    {name: 'Inglourious Basterds', imdb: 8.3}
  ];

  constructor() { }
}
