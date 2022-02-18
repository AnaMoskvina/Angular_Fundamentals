import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() placeholder: string = '';
  @Output() searchEvent = new EventEmitter<string>();
  query: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.searchEvent.emit(this.query);
  }

}
