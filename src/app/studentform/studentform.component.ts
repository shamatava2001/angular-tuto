import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})

export class StudentformComponent {
  studForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private dataService: DataserviceService
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
    this.dataService.getData(this.studForm.value).subscribe({
      next:(res)=>{alert('სტუდენტი წარმატებით დაემატა')},
      error:(err)=>{alert('წარმოიშვა ხარვეზი')}
    })
  }
  
}
