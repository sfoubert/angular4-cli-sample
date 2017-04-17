import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry.component';

const routes: Routes = [
  { path: '', component: EntryComponent }
];

export const EntryRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
