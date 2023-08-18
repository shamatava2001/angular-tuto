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
  projectedText = 'projection';
  show : boolean = true;

  handleClick(){
    this.text = 'clicked';
  }
  changeText(){
    this.projectedText = 'new projection';
  }
  showChild(){
    this.show = !this.show;
  }


}
