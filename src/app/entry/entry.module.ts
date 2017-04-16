import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { EntryRoutingModule } from './entry-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryService } from './entry.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    EntryRoutingModule,
  ],
  providers: [EntryService],
  declarations: [EntryComponent]
})
export class EntryModule { }
