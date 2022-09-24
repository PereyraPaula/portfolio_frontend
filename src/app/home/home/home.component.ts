import { Component } from '@angular/core';
import { icons } from 'src/app/utils/icons';
import { Icon } from 'src/app/shared/types/Icon';
import { DialogServiceService } from 'src/app/shared/services/dialog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  iconsList: Array<Icon> = icons;
  toggleModalAdd: boolean = false;
  titleModalAddSection: string = "Agregar sección";
  titleModalAdd: string = "Agregar";

  constructor(private dialogService: DialogServiceService) {}

  openModalAddSection() {
    this.dialogService.showDialog = true
    this.toggleModalAdd = true
  }

  closeModal(showModal: boolean, modal: string){
    if (modal === 'add') {
      this.toggleModalAdd = showModal;
    }
    this.dialogService.showDialog = showModal
  }
}
