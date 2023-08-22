import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  movies: {name: string, imdb: number}[];

  constructor(data: DataService){
    this.movies = data.movies;
  }

}
