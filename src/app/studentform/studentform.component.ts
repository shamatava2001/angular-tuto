import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Inject} from '@angular/core';
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
    private dialogRef: MatDialogRef<StudentformComponent>,
    @Inject(MAT_DIALOG_DATA)  public data: any
    ){
    this.studForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      university: '',
      faculty: '',
      speciality: '',
      enrollDate: ''
    });
      this.studForm.patchValue(this.data);
  }

  handleSubmit(){
    if(this.data){
      this.updateData(this.data.id, this.studForm.value);
    }
    else 
    {
      this.addData();
    } 
  }

  addData(){
    this.dataService.addData(this.studForm.value).subscribe({
      next:(res)=>{
        alert('სტუდენტი წარმატებით დაემატა');
        this.dialogRef.close();
      },
      error:(err)=>{alert('წარმოიშვა ხარვეზი')}
    }) 
  }
  updateData(id: number, data:any){
    this.dataService.updateData(id, data).subscribe((res)=>{alert('წარმატებით შეიცვალა')});
  }
}
