import { Input, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appColorText]'
})
export class ColorTextDirective {

  colors= ['red', 'black', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'grey'];

  constructor(private el: ElementRef) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.el.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)]
  }

}
