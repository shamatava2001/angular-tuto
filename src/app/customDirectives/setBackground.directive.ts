import { Directive, ElementRef, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  // metadata object
  selector: '[setBackground]',
})
export class setBackgroundDirective implements OnInit {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'red'
    );
  }
}
