import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';

const routes: Routes = [
  { path: '', component: MovieComponent }
];

export const MovieRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
