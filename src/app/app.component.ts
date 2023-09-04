import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentformComponent } from './studentform/studentform.component';
import {OnInit} from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { MatDialogRef } from '@angular/material/dialog';
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
  'university', 'faculty', 'speciality', 'enrolldate', 'actions'];
  dataSource!: IStudent[];
  dialogRef!:MatDialogRef<StudentformComponent>;

  constructor(private dialog: MatDialog, private dataService: DataserviceService){}

  handleClick(){
     this.dialog.open(StudentformComponent).afterClosed().subscribe((res)=>{
      if(res){
        this.getStudent();
      }
    })
  }

  ngOnInit(): void {
    this.getStudent();
  }
  deleteStudent(id: number){
    this.dataService.deleteData(id).subscribe((res)=>{
      alert('წარმატებით წაიშალა');
      this.getStudent();
    })
  }
  editStudent(data: any){
    this.dialog.open(StudentformComponent, {data: data}).afterClosed().subscribe(
      (res)=>{
        if(res){
          this.getStudent();
        }
      }
    )
  }
  getStudent(){
    this.dataService.getData().subscribe(
      {
      next: (res)=>{this.dataSource = (res as IStudent[])},
      error: (err)=> {alert('წარმოიშვა შეცდომა')}  
      }
    )
  }
  
}
