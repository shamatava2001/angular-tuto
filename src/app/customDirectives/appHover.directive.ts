import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostBinding('innerText') text: string = 'Hover Me';

  @HostListener('mouseenter') onMouseEnter() {
    this.text = 'Hovered';
  }

  @HostListener('mouseout') onMouseOut() {
    this.text = 'Hover Me';
  }
}
