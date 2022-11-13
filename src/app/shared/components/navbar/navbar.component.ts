import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { DialogServiceService } from '../../services/dialog-service.service';
import { icons } from '../../../utils/icons';
import { Icon } from '../../types/Icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentRoute: string = '';
  toggleMProfileEdit: boolean = false;
  toggleMSocialAdd: boolean = false;
  titleModal: string = 'Editar datos personales';
  titleModalRedes: string = 'Redes sociales';
  iconsList: Array<Icon> = icons;
  iconsSelect: Array<Icon> = [];

  constructor(
    private router: Router,
    private dialogService: DialogServiceService
  ) {
    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit(): void {
    icons.forEach(icon => {
      if (icon.show) this.iconsSelect.push(icon);
    });
  }

  showModalEditData(show: boolean) {
    this.dialogService.showDialog = show;
    this.toggleMProfileEdit = show;
  }

  addSocialLink(show: boolean) {
    this.dialogService.showDialog = show;
    this.toggleMSocialAdd = show;
  }

  closeModal(showModal: boolean, modal: string) {
    if (modal === 'profile') {
      this.toggleMProfileEdit = showModal;
    } else {
      this.toggleMSocialAdd = showModal;
    }
    this.dialogService.showDialog = showModal;
  }
}
