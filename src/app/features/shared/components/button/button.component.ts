import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'td-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent { }
