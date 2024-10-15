import {Component, Input} from '@angular/core';
import {PlayerStats, ScoreboardMode} from '../../model/model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getMode} from '../../store/snooker-scoreboard-the-scoreboard.selector';
import {TheScoreboardState} from '../../store/snooker-scoreboard-the-scoreboard.reducer';
import * as scoreboardActions from '../../store/snooker-scoreboard-the-scoreboard.actions';

@Component({
  selector: 'app-player',
  templateUrl: './snooker-player.component.html',
  styleUrls: ['./snooker-player.component.scss']
})
export class SnookerPlayerComponent {

  @Input()
  public player$!: Observable<PlayerStats>

  public gameMode$: Observable<ScoreboardMode>;
  constructor(private state:Store<TheScoreboardState>) {
    this.gameMode$ = this.state.select(getMode);
  }

  protected readonly ScoreboardMode = ScoreboardMode;

  switchPlayer() {

      this.state.dispatch(scoreboardActions.turnPlayer());

  }
}
