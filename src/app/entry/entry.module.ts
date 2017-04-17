import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryService } from './entry.service';
import { EntryRoutingModule } from './entry-routing.module';

@NgModule({
  imports: [
    EntryRoutingModule,
    CommonModule,
    NgbModule.forRoot(),
  ],
  providers: [EntryService],
  declarations: [EntryComponent]
})
export class EntryModule { }
