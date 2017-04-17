import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MovieModule } from './movie/movie.module';
import { IndexModule } from './index/index.module';
import { UserModule } from './user/user.module';
import { EntryComponent } from './entry/entry.component';
import { EntryModule } from './entry/entry.module';
import {MovieRoutingModule} from "./movie/movie-routing.module";
import {UserRoutingModule} from "./user/user-routing.module";
import {EntryRoutingModule} from "./entry/entry-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    IndexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
