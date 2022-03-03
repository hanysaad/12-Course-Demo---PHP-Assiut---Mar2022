import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
  //private elem: ElementRef;
  @Input('LightBox') hoverColor:string="yellow";
  @Input() defaultColor: string="darkblue"
  constructor(private elem: ElementRef) {
    //this.elem=elem;
    // elem.nativeElement.style.border=`2px solid ${this.defaultColor}`;
   }

  ngOnChanges(): void {
    this.elem.nativeElement.style.border=`2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.elem.nativeElement.style.border=`3px solid ${this.hoverColor}`;
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elem.nativeElement.style.border=`2px solid ${this.defaultColor}`;
  }

}
