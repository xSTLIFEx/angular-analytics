import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {GoogleAnalyticsService} from '../services/google-analytics.service';

@Directive({
  selector: '[stGoogleAnalyticsEvent]'
})
export class GoogleAnalyticsEventDirective {

  @Input()
  public posGoogleAnalyticsEventText: string;

  constructor(
    private el: ElementRef,
    private googleAnalyticsService: GoogleAnalyticsService
  ) { }

  @HostListener('click') onClick() {
    this.googleAnalyticsService.sendEvent(this.posGoogleAnalyticsEventText);
  }
}
