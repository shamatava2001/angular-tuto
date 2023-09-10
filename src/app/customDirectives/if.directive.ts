import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(
    private view: TemplateRef<any>, 
    private viewContainer: ViewContainerRef
    ) { }

    @Input() set appIf(condition: boolean){
      if(condition){
        this.viewContainer.createEmbeddedView(this.view);
      } else {
        this.viewContainer.clear();
      }
    }

}
