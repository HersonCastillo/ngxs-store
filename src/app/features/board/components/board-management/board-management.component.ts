import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FeatureCard } from '../../interfaces/card';
import { BoardSelectors } from '../../store/board.selectors';

@Component({
  selector: 'td-board-management',
  templateUrl: './board-management.component.html',
  styleUrls: ['./board-management.component.scss'],
})
export class BoardManagementComponent {
  @Select(BoardSelectors.getFeatures)
  boards$: Observable<FeatureCard[]>;
}
