import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private ele:ElementRef) { 
    
  }

  @HostListener('mouseenter') onMouseEnter(){
   this.changeTextColor('red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeTextColor('green');
  }

  changeTextColor(color:string){
    this.ele.nativeElement.style.color = color;
  }

}
