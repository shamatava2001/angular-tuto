import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'net-ninja';
  name = 'giga';
  show : boolean = true;

  handleClick(e : any){
    console.log(e);
    this.show = !this.show;
  }

}
