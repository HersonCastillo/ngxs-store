import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/features/shared/services/modal.service';
import { FeatureCard } from '../../interfaces/card';

@Component({
  selector: 'td-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent {
  @Input() board: FeatureCard;

  constructor(public modalService: ModalService) { }

  addTicket(): void {
    this.modalService.openModal({
      title: 'Hola',
      content: 'Como esta',
      hasFooter: true,
      onOk: () => console.log('ok'),
      onCancel: () => console.log('cancel'),
    });
  }
}
