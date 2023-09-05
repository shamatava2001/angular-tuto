import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  notifications: number = 1;
  title = 'net-ninja';
  value: number = 0;
  show: boolean = false;
  interval: any;
  constructor(private dialog: MatDialog){ }

  openDialog(){
    const dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'giga'} });

    dialogRef.afterClosed().subscribe((res)=>{console.log(res)});
  }

  displayedColumns: string[] = ['name', 'position', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
   setInterval(()=>{
      if(this.value === 100){
        this.value = 0;
      }
      this.value = this.value + 2;
    },100)
    
  }

  loadData(){
    this.show = true;
    setTimeout(()=>{
      this.show = false;
    }, 3000);
  }
}
