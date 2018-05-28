import { TestBed, inject } from '@angular/core/testing';

import { StAngularAnalyticsService } from './st-angular-analytics.service';

describe('StAngularAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StAngularAnalyticsService]
    });
  });

  it('should be created', inject([StAngularAnalyticsService], (service: StAngularAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
