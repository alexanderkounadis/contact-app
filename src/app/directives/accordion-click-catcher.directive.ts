import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[clickCatcher]'
})
export class AccordionClickCatcherDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('click', ['$event.target']) open() {
          let nextElement = this.el.nativeElement.nextElementSibling;
          this.el.nativeElement.classList.toggle("active");

          if (nextElement.style.maxHeight) {
            nextElement.style.maxHeight = null;
          } else {
            nextElement.style.maxHeight = nextElement.scrollHeight + "px";
          }
      }
  }
