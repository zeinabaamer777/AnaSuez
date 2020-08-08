import { Directive, ElementRef, OnChanges, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
@Directive({
  selector: '[appDateHandler]'
})
export class DateHandlerDirective  implements OnChanges{

  @Input() public appDateHandler: any;
  @Input() public input: any;
  
  constructor(private elementRef: ElementRef,private datePipe: DatePipe) {
   
   
   }
  ngOnChanges(changes): void {
    
    debugger;
    this.elementRef.nativeElement.value=this.datePipe.transform(this.input, 'yyyy-MM-dd', 'es-ES');
   

 
   
  }
  
   // elementRef.nativeElement.style.backgroundColor = 'red'

}
