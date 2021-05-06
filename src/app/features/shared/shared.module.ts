import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { ModalComponent } from './components/modal/modal.component';

const shared = [
  ButtonComponent,
  CommonLayoutComponent,
  ModalComponent,
];

@NgModule({
  declarations: [...shared],
  imports: [CommonModule],
  exports: [...shared],
})
export class SharedModule {}
