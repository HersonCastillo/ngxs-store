import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddBoard } from './board.actions';
import { BoardStateModel } from './board.state';

type Context = StateContext<BoardStateModel>;

@State<BoardStateModel>({
  name: 'features',
  defaults: {
    boards: [
      {
        id: 0,
        label: 'Backlog',
      },
    ],
  },
})
@Injectable()
export class BoardStore {
  @Action(AddBoard)
  addBoard(ctx: Context, { board }: AddBoard) {
    const state = ctx.getState();
    ctx.patchState({
      boards: [...state.boards, board],
    });
  }
}
