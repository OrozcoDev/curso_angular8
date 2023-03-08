import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlinght]'
})
export class HighlinghtDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'gray';
   }

}
