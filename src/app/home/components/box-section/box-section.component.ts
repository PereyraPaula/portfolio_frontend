import { Component, Input } from '@angular/core';
import { icons } from 'src/app/utils/icons';
import { Icon } from 'src/app/shared/types/Icon';
import { DialogServiceService } from '../../../shared/services/dialog-service.service';

@Component({
  selector: 'app-box-section',
  templateUrl: './box-section.component.html',
  styleUrls: ['./box-section.component.css'],
})
export class BoxSectionComponent {
  iconsList: Array<Icon> = icons;
  toggleModalEdit: boolean = false;
  toggleModalAdd: boolean = false;
  titleModal: string = "Editar";
  titleModalAdd: string = "Agregar";

  constructor(private dialogService: DialogServiceService) {}

  editShowModal() {
    this.dialogService.showDialog = true
    this.toggleModalEdit = true
  }

  addShowModal() {
    this.dialogService.showDialog = true
    this.toggleModalAdd = true
  }

  closeModal(showModal: boolean, modal: string){
    if (modal === 'edit') {
      this.toggleModalEdit = showModal;
    } else {
      this.toggleModalAdd = showModal;
    }
    this.dialogService.showDialog = showModal
  }
}
