import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() text: string | undefined;
  @Output() customEvent = new EventEmitter();

  // emitting custom event with some data
  handleClick(){
    this.customEvent.emit(2023);
  }

}
