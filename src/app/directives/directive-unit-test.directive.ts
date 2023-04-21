import { AfterViewInit, Directive, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
//This will act as an attribute directive

@Directive({
  selector: '[appDirectiveUnitTest]'
})
export class DirectiveUnitTestDirective implements OnChanges,AfterViewInit{
  headerColor:string = 'green';

  constructor(private ele:ElementRef) { 
    // this.ele.nativeElement.style.backgroundColor = this.headerColor;
    //this.ele.nativeElement.style.customProperty = true;
  }
  ngAfterViewInit(): void {
    this.ele.nativeElement.style.color = this.headerColor;
  }



  ngOnChanges(): void {
    this.ele.nativeElement.style.backgroundColor = this.headerColor;
  }

}
