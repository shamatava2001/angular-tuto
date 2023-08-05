import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() reciever:string = '';
  message:string = 'hello world';
  messageInterpolation = "interpolation";
  myBoolean:boolean = true;

  handleClick(name:string){
    console.log(`hello ${name}`);
  }

  person = {
    name: '',
    lastname: ''
  }
}
