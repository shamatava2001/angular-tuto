import { Component } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  movies : {name: string, imdb: number}[] = [
    {name: 'The Silence of the Lambs', imdb: 8.6},
    {name: 'The Wolf of Wall Street', imdb: 8.2},
    {name: 'Batman Begins', imdb: 8.4},
    {name: 'Inglourious Basterds', imdb: 8.3}
  ]

}
