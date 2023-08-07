import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
  @Input() ninja:any;
  @Output() onSent:EventEmitter<string> = new EventEmitter();

  sendTitle(){
    this.onSent.emit('Output Decorator');
  }
}
