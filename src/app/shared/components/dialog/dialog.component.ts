import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogServiceService } from '../../services/dialog-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @Input() title: string = '';
  @Output() closeModalEvent: EventEmitter<any> = new EventEmitter();
  constructor(private dialogService: DialogServiceService) {}

  closeModal(show: boolean) {
    this.dialogService.showDialog = show;
    this.closeModalEvent.emit(show);
  }
}
