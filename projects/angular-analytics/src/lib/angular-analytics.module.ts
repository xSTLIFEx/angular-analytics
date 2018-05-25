import { NgModule } from '@angular/core';
import {GoogleAnalyticsEventDirective} from './directives/google-analytics-event.directive';
import {GoogleAnalyticsService} from './services/google-analytics.service';

@NgModule({
  imports: [
  ],
  providers: [GoogleAnalyticsService],
  declarations: [GoogleAnalyticsEventDirective],
  exports: [GoogleAnalyticsEventDirective]
})
export class AngularAnalyticsModule { }
