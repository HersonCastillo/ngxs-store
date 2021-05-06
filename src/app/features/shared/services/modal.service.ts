import { ElementRef, Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Modal {
  title: string;
  content: TemplateRef<any>;
  hasFooter?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalProperties = new BehaviorSubject<Modal | null>(null);
  modalProperties$ = this.modalProperties.asObservable();

  private modalVisibility = new BehaviorSubject(false);
  modalVisibility$ = this.modalVisibility.asObservable();

  openModal(props: Modal) {
    this.modalVisibility.next(true);
    this.modalProperties.next(props);
  }

  closeModal() {
    this.modalVisibility.next(false);
    this.modalProperties.next(null);
  }
}
