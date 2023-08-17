import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() textPar : string = 's';
  @Input() textPar2 : string = 's';

  constructor(){
    console.log('constructor called,', this.textPar);
  }

  // 1. ngOnChanges - როცა input property  ინიციალიზებულია ან იცვლება 
  // SimpleChanges-ით ვაფიქსირებთ ცვლილებას
  ngOnChanges(simpleChange : SimpleChanges){
    console.log('ngOnChanges called,', this.textPar, simpleChange);
  }

}
