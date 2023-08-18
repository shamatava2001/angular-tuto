import { Component, 
  OnChanges, 
  OnInit, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked{

  title = 'net-ninja';
  text = 'input1';
  text2 = 'input2'
  projectedText = 'projection';
  show : boolean = true;

  handleClick(){
    this.text = 'clicked';
  }
  changeText(){
    this.projectedText = 'new projection';
  }
  showChild(){
    this.show = !this.show;
  }

  constructor(){
    console.log(`parent constructor called`);
  }

  ngOnChanges(){
    console.log('parent ngOnChanges called');
  }


  ngOnInit(): void {
    console.log('parent ngOnInit called.');
  }

  ngDoCheck(): void {
    console.log(`parent ngDoCheck called.`);
  }

  ngAfterContentInit(): void {
    console.log(`parent ngAfterContentInit called.`);
  }


  ngAfterContentChecked(): void {
    console.log(`parent ngAfterContentChecked called.`);
  }

  ngAfterViewInit(): void {
    console.log(`parent ngAfterViewInit called.`);
  }

  ngAfterViewChecked(): void {
    console.log(`parent ngAfterViewChecked called`);
  }

  
}

