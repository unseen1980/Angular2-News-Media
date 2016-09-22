/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsApiService } from './news-api.service';

describe('Service: NewsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsApiService]
    });
  });

  it('should ...', inject([NewsApiService], (service: NewsApiService) => {
    expect(service).toBeTruthy();
  }));
});
