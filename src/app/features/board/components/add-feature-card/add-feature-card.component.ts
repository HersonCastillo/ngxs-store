import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddBoard } from '../../store/board.actions';

@Component({
  selector: 'td-add-feature-card',
  templateUrl: './add-feature-card.component.html',
  styleUrls: ['./add-feature-card.component.scss'],
})
export class AddFeatureCardComponent {
  featureCardInput = new FormControl(null, Validators.required);

  constructor(private store: Store) { }

  addCard(): void {
    const { valid, value: label } = this.featureCardInput;
    if (valid) {
      this.store.dispatch(
        new AddBoard({
          id: new Date().getTime(),
          label,
        }),
      );
      this.featureCardInput.reset();
    }
  }
}
