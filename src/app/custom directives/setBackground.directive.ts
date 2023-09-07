import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // metadata object
  selector: '[setBackground]',
})
export class setBackgroundDirective implements OnInit {
  constructor(private element: ElementRef) {}

  
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
