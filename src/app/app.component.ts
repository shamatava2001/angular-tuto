import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'net-ninja';
  text = 'input1';
  text2 = 'input2'

  handleClick(){
    this.text = 'clicked';
  }

}
