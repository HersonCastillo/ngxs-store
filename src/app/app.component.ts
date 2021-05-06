import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from './features/shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modalVisibility$ = this.modalService.modalVisibility$;

  constructor(public modalService: ModalService) { }
}
