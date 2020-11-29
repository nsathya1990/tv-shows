import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.changeBgColor('red');
  }

  @HostBinding('style.font-size') fontSize: string;

  @HostListener('mouseover') zoomIn() {
    // this.renderer.setStyle(this.el.nativeElement, 'font-size', 'xx-large');
    this.fontSize = 'xx-large';
  }
  @HostListener('mouseleave') zoomOut() {
    // this.renderer.setStyle(this.el.nativeElement, 'font-size', 'initial');
    this.fontSize = 'initial';
  }

  changeBgColor(color: string | number) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
