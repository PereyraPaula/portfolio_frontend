import { Component } from '@angular/core';
import { DialogServiceService } from 'src/app/shared/services/dialog-service.service';
import { Icon } from 'src/app/shared/types/Icon';
import { icons } from 'src/app/utils/icons';

@Component({
  selector: 'app-box-proyects',
  templateUrl: './box-proyects.component.html',
  styleUrls: ['./box-proyects.component.css'],
})
export class BoxProyectsComponent {
  iconsList: Array<Icon> = icons;
  toggleModalEdit: boolean = false;
  titleModal: string = "Editar";
  titleModalAdd: string = "Agregar";

  constructor(private dialogService: DialogServiceService) {}

  editShowModal() {
    this.dialogService.showDialog = true
    this.toggleModalEdit = true
  }

  deleteShowModal() {
    console.log("Borrar proyecto")
  }

  closeModal(showModal: boolean, modal: string){
    if (modal === 'edit') {
      this.toggleModalEdit = showModal;
    }
    this.dialogService.showDialog = showModal
  }
}
