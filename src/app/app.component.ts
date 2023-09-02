import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentformComponent } from './studentform/studentform.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'net-ninja';

  constructor(private dialog: MatDialog){}

  handleClick(){
    this.dialog.open(StudentformComponent);
  }
  
}
