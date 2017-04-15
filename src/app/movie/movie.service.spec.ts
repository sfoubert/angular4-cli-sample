import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpModule, XHRBackend, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        MovieService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should service defined', inject([MovieService, MockBackend], (service: MovieService, mockBackend) => {

    const mockResponse = {
      "content": [
        {
          "id": {},
          "title": "Les associés",
          "categories": null
        }]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    expect(service).toBeTruthy();
  }));
});
