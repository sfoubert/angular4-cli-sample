import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpModule, XHRBackend, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

const mockUsers = [
  {
    'createdOn': 1406851200000,
    'lastLogin': 1492360984027,
    'id': {  },
    'name': 'Fou',
    'firstname': 'Sébastien',
    'gender': 'male',
    'email': 'seb_fou@hotmail.com',
    'birthDate': null,
    'photo': 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/' +
    '420187_10151459925774255_1457810427_n.jpg?oh=3d506fafe8b3d882b2d8cf2672bb2af1&oe=598FD21D',
    'role': 'admin',
  }
];

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        UserService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should service defined', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should service getUsers', inject([UserService, MockBackend], (service: UserService, mockBackend) => {

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockUsers)
      })));
    });

    service.getUsers().subscribe((response) => {
      expect(response.length).toBe(1);
      expect(response[0].firstname).toBe('Sébastien');
    });

  }));

});
