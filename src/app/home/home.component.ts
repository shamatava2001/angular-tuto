import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('para') paraEl : ElementRef | undefined;
  
  ngOnInit(){
    console.log(this.paraEl);
  }
}
