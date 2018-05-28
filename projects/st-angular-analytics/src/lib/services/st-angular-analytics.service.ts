import { Injectable } from '@angular/core';
declare var gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class StAngularAnalyticsService {

  constructor() { }

  public sendEvent(text: string) {
    gtag('event', 'click', { 'event_category': text});
  }
}
