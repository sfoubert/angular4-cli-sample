import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpModule, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

const mockMovies = [
  {
    "id": {},
    "title": "Les associés",
    "categories": null
  }];

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
  it('should service defined', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));

  it('should service getMovies', inject([MovieService, MockBackend], (service: MovieService, mockBackend) => {

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockMovies)
      })));
    });

    service.getMovies().subscribe((response) => {
      expect(response.length).toBe(1);
      expect(response[0].title).toBe("Les associés");
    });

  }));


});
