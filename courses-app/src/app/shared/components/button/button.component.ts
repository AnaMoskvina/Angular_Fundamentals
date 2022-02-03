import { Component, OnInit, Input } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonText?: string;
  @Input() buttonIcon?: IconName;

  constructor() { }

  ngOnInit(): void {
  }

}