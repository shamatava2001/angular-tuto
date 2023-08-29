import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'net-ninja';
  constructor(private dialog: MatDialog){ }

  openDialog(){
    const dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'giga'} });

    dialogRef.afterClosed().subscribe((res)=>{console.log(res)});
  }
}
