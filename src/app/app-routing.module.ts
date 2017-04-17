import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'movies', loadChildren: 'app/movie/movie.module#MovieModule' },
  { path: 'users', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'entries', loadChildren: 'app/entry/entry.module#EntryModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
