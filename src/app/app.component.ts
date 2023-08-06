import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'net-ninja';
  ninja = {
    name: 'yoshi',
    belt: 'black'
  }
}
