import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {TheDartsScoreboardState} from '../../store/darts-scoreboard-the-scoreboard.reducer';
import {addDart} from '../../store/darts-scoreboard-the-scoreboard.actions';

@Component({
  selector: 'app-dartsboard-table',
  templateUrl: './dartsboard-table.component.html',
  styleUrls: ['./dartsboard-table.component.scss']
})
export class DartsboardTableComponent {

  numbers: number[];

  constructor(private store:Store<TheDartsScoreboardState>) {
    this.numbers = Array(20).fill(0).map((x,i) => i+1);
  }
  addDart(score:string) {
    this.store.dispatch(addDart({score}));
  }


}
