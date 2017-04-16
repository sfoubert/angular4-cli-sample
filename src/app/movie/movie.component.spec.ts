import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from './movie.service';
import {Http, BaseRequestOptions, XHRBackend, HttpModule} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieComponent
      ],
      imports: [
        HttpModule,
        NgbModule.forRoot(),
      ],
      providers: [
        MovieService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
