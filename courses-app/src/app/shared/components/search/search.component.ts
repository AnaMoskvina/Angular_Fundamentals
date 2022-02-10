import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() placeholder: string = '';
  @Output() search: string = '';
  query: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.search = this.query;
  }

}
