import { NgModule } from '@angular/core';
import {StAngularAnalyticsEventDirective} from './directives/st-angular-analytics-event.directive';
import {StAngularAnalyticsService} from './services/st-angular-analytics.service';

@NgModule({
  imports: [],
  providers: [StAngularAnalyticsService],
  declarations: [StAngularAnalyticsEventDirective],
  exports: [StAngularAnalyticsEventDirective]
})
export class StAngularAnalyticsModule { }
