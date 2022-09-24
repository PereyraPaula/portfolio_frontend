import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorContainerComponent } from './components/form-error-container/form-error-container.component';
import { FormErrorMsgComponent } from './components/form-error-msg/form-error-msg.component';

@NgModule({
  declarations: [FormErrorContainerComponent, FormErrorMsgComponent],
  imports: [CommonModule],
  exports: [FormErrorContainerComponent, FormErrorMsgComponent],
})
export class FormExtensionsModule {}
