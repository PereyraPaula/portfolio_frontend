import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, DialogComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavbarComponent, FooterComponent, DialogComponent],
})
export class SharedModule {}
