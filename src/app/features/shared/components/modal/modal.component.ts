import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'td-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isVisible = false;
  modalProperties = this.modalService.modalProperties$;

  @ViewChild('content')
  content: TemplateRef<any>;

  constructor(public modalService: ModalService) { }

  closeModal(onCallback?: () => void): void {
    if (onCallback) {
      onCallback();
    }
    this.modalService.closeModal();
  }
}
