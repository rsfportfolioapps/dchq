import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appExternalUrl]',
})
export class ExternalUrlDirective {
  private url: string;

  constructor(private el: ElementRef, private router: Router) { }

  @Input('appExternalUrl')
  public set externalUrl(link: string) {
    this.url = link;
  }

  @HostListener('click', ['$event'])
  clicked(event: Event) {
    (window as any).open(this.url, "_self");

    event.preventDefault();
  }
}