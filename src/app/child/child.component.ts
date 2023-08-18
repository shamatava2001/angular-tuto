import { Component, OnChanges, Input, SimpleChanges, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit {

  @Input() textPar : string = 's';
  @Input() textPar2 : string = 's';
  @ViewChild('par') paraEl : ElementRef | undefined;
  @ContentChild('heading') headingEl : ElementRef | undefined;

  constructor(){
    console.log('constructor called,', this.textPar);
  }

  // 1. ngOnChanges - როცა input property  ინიციალიზებულია ან იცვლება 
  // SimpleChanges-ით ვაფიქსირებთ ცვლილებას
  ngOnChanges(simpleChange : SimpleChanges){
    console.log('ngOnChanges called,', this.textPar, simpleChange);
  }

  // 2. ngOnInit - როცა input property  ინიციალიზებულია.
  // @viewChild, @contentChild მიუწვდომელია
  ngOnInit(): void {
    console.log('ngOnInit called.', `initial input values: ${this.textPar}, ${this.textPar2}`);
    console.log(`in ngOnInit. @viewChild: ${this.paraEl}, @contentChild: ${this.headingEl}`);
  }
}
