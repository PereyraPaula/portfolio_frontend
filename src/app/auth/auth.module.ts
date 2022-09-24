import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormExtensionsModule } from '../shared/modules/form-extensions/form-extensions.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormExtensionsModule,
    AppRoutingModule,
  ],
})
export class AuthModule {}
