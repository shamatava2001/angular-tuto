import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})

export class StudentformComponent {
  studForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private dataService: DataserviceService,
    private dialogRef: MatDialogRef<StudentformComponent>
    ){
    this.studForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      university: '',
      faculty: '',
      speciality: '',
      enrollDate: ''
    });
  }

  handleSubmit(){
    // console.log(this.studForm.value);
    this.dataService.addData(this.studForm.value).subscribe({
      next:(res)=>{
        alert('სტუდენტი წარმატებით დაემატა');
        this.dialogRef.close();
      },
      error:(err)=>{alert('წარმოიშვა ხარვეზი')}
    })
  }

}
