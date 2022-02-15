import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() okButtonText: string = 'ok';
  @Input() cancelButtonText: string = 'cancel';
  @Output() resultEvent = new EventEmitter<boolean>();
  @Output() showModal: boolean = true;
  closeButtonIcon:IconName = 'times';

  constructor() { }

  ngOnInit(): void {
  }

  getResult(result:boolean) {
    this.resultEvent.emit(result);
  }

}
