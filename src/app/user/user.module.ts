import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    UserRoutingModule,
  ],
  providers: [UserService],
  declarations: [UserComponent]
})
export class UserModule { }
