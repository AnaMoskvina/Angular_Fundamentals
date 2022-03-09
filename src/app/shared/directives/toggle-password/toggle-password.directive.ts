import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[togglePassword]',
  exportAs: 'togglePassword'
})
export class TogglePasswordDirective {

  shown: boolean = true;

  constructor(private el: ElementRef) { }

  toggle() {
    if (!this.shown) {
      this.el.nativeElement.setAttribute('type', 'text');
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
    }
    this.shown = !this.shown;
  }

  getIcon() {
    return this.shown ? 'eye' : 'eye-slash';
  }

}
