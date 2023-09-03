import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentformComponent } from './studentform/studentform.component';
import {OnInit} from '@angular/core';
import { DataserviceService } from './dataservice.service';

interface IStudent{
  id: number,
  firstName: string,
  lastName: string,
  university: string,
  faculty: string,
  speciality: string,
  enrollDate: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  displayedColumn = ['id', 'firstname', 'lastname', 
  'university', 'faculty', 'speciality', 'enrolldate'];
  dataSource!: IStudent[];

  constructor(private dialog: MatDialog, private dataService: DataserviceService){}

  handleClick(){
    this.dialog.open(StudentformComponent);
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      {
      next: (res)=>{this.dataSource = (res as IStudent[])},
      error: (err)=> {alert('წარმოიშვა შეცდომა')}  
      }
    )
  }
  
}
