import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  imports: [
    UserRoutingModule,
    CommonModule,
    NgbModule.forRoot(),
  ],
  providers: [UserService],
  declarations: [UserComponent]
})
export class UserModule { }
