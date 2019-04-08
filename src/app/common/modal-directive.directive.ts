import { Directive, OnInit, ElementRef, Inject, Input } from '@angular/core';
import { JQUERY_TOKEN } from './jquery.service';

@Directive({
  selector: '[appModalDirective]'
})
export class ModalDirectiveDirective implements OnInit {

  nativeElement: HTMLElement;
  @Input() appModalDirective: string;
  constructor(private elementReference: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    this.nativeElement = elementReference.nativeElement;
  }

  ngOnInit(): void {
    this.nativeElement.addEventListener('click', () => {
      this.$(`#${this.appModalDirective}`).modal({});
    });

  }


}
