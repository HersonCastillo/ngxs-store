import { Selector } from '@ngxs/store';
import { BoardStateModel } from './board.state';
import { BoardStore } from './board.store';

export class BoardSelectors {
  @Selector([BoardStore])
  static getFeatures(state: BoardStateModel) {
    return state.boards;
  }
}
