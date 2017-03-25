import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MovieService],
  declarations: [MovieComponent]
})
export class MovieModule {
}
