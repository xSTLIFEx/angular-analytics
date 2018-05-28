import { StAngularAnalyticsEventDirective } from './st-angular-analytics-event.directive';
import {StAngularAnalyticsService} from '../services/st-angular-analytics.service';

describe('StAngularAnalyticsEventDirective', () => {
  it('should create an instance', () => {
    const directive = new StAngularAnalyticsEventDirective(StAngularAnalyticsService);
    expect(directive).toBeTruthy();
  });
});
