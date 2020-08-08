import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLangToggle]',
  
})
export class LangToggleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }

}
