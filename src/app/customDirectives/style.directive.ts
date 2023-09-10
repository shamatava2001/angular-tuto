import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(
    private element: ElementRef, 
    private renderer: Renderer2
    ) { }

    @Input() set appStyle(styles: Object) {
      let entries = Object.entries(styles);
      for(let item of entries) {
        const [prop, value] = item;
        this.renderer.setStyle(this.element.nativeElement, prop, value);
      }
    }
}
