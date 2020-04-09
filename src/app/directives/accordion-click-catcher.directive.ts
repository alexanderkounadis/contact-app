import { Directive, HostListener, ElementRef } from '@angular/core';

// this is an attribute directive controlling the accordion behavior
// when one button is clicked it toggles collapse attribute
@Directive({
  selector: '[clickCatcher]'
})
export class AccordionClickCatcherDirective {
  constructor(private el: ElementRef) {}
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
