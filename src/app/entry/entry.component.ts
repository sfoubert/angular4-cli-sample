import { Component, OnInit } from '@angular/core';
import { EntryService } from './entry.service';
import { Entry } from './entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  private entries: Entry[];
  private errorMessage: any;

  constructor(private entryService: EntryService) {
  }

  ngOnInit() {
    this.getEntries();
  }

  getEntries() {
    this.entryService.getEntries()
      .subscribe(
        entries => this.entries = entries,
        error => this.errorMessage = <any>error);
  }

}
