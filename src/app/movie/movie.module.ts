import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    MovieRoutingModule,
    CommonModule,
    NgbModule.forRoot(),
  ],
  providers: [MovieService],
  declarations: [MovieComponent]
})
export class MovieModule { }
