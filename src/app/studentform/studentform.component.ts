import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})

export class StudentformComponent {
  studForm:FormGroup;

  constructor(private formBuilder: FormBuilder){
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
    console.log(this.studForm.value);
  }
}
