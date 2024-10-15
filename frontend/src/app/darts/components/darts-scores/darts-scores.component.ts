import { Component } from '@angular/core';
import {TheDartsScoreboardState} from '../../store/darts-scoreboard-the-scoreboard.reducer';
import {Store} from '@ngrx/store';
import {getCurrentDarts, getPlayer1, getPlayer2} from '../../store/darts-scoreboard-the-scoreboard.selector';
import {Observable} from 'rxjs';
import {clearCurrentDartSet, commitScore} from '../../store/darts-scoreboard-the-scoreboard.actions';
import {DartsPlayer} from '../../model/darts-model';

@Component({
  selector: 'app-darts-scores',
  templateUrl: './darts-scores.component.html',
  styleUrls: ['./darts-scores.component.scss']
})
export class DartsScoresComponent {

  public currentDarts$: Observable<string[]>;
  public player1$: Observable<DartsPlayer>;
  public player2$: Observable<DartsPlayer>;
  constructor(private state:Store<TheDartsScoreboardState>) {
    this.currentDarts$ = this.state.select(getCurrentDarts);
    this.player1$ = this.state.select(getPlayer1);
    this.player2$ = this.state.select(getPlayer2);

  }

  public add(){
    this.state.dispatch(commitScore());
  }

  removeCurrentDarts() {
    this.state.dispatch(clearCurrentDartSet());
  }
}
