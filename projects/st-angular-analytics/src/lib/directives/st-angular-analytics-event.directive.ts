import {Directive, HostListener, Input} from '@angular/core';
import {StAngularAnalyticsService} from '../services/st-angular-analytics.service';

@Directive({
  selector: '[stGoogleAnalyticsEvent]'
})
export class StAngularAnalyticsEventDirective {

  @Input()
  public posGoogleAnalyticsEventText: string;

  constructor(
    private angularAnalyticsService: StAngularAnalyticsService
  ) { }

  @HostListener('click') onClick() {
    this.angularAnalyticsService.sendEvent(this.posGoogleAnalyticsEventText);
  }
}
