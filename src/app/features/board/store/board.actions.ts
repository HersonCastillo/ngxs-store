import { FeatureCard } from '../interfaces/card';

export class AddBoard {
  static readonly type = '[Board] Add board';
  constructor(public board: FeatureCard) { }
}
