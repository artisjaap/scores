import { Component } from '@angular/core';
import * as scoreboardActions from '../../store/snooker-scoreboard-the-scoreboard.actions';
import {Store} from '@ngrx/store';
import {TheScoreboardState} from '../../store/snooker-scoreboard-the-scoreboard.reducer';
import {getScoreboardState, ScoreboardState} from '../../store/snooker-scoreboard.reducer';
import {Observable} from 'rxjs';
import {ScoreboardMode, TableStats} from '../../model/model';
import {getMode, getTableStats} from '../../store/snooker-scoreboard-the-scoreboard.selector';


@Component({
    selector: 'app-controls',
    templateUrl: './snooker-controls.component.html',
    styleUrls: ['./snooker-controls.component.scss'],
    standalone: false
})
export class SnookerControlsComponent {

  public scoreboardStats$: Observable<TableStats>;
  public gameMode$: Observable<ScoreboardMode>;
  constructor(private state: Store<TheScoreboardState>) {
    this.scoreboardStats$ = this.state.select(getTableStats);
    this.gameMode$ = this.state.select(getMode);
  }

  switchPlayer() {
    this.state.dispatch(scoreboardActions.turnPlayer());
  }

  potRed() {
    this.state.dispatch(scoreboardActions.potRed());
  }

  potYellow() {
    this.state.dispatch(scoreboardActions.potYellow());
  }

  potGreen() {
    this.state.dispatch(scoreboardActions.potGreen());
  }

  potBrown() {
    this.state.dispatch(scoreboardActions.potBrown());
  }

  potBlue() {
    this.state.dispatch(scoreboardActions.potBlue());
  }

  potPink() {
    this.state.dispatch(scoreboardActions.potPink());
  }

  potBlack() {
    this.state.dispatch(scoreboardActions.potBlack());
  }

  potWhite() {
    this.state.dispatch(scoreboardActions.potWhite());
  }

  reset() {
    this.state.dispatch(scoreboardActions.restart());
  }
  newGame() {
    this.state.dispatch(scoreboardActions.newGame());
  }

  normalMode(){
    this.state.dispatch(scoreboardActions.setMode({mode:ScoreboardMode.NORMAL}));
  }

  positiveCorrectionMode(){
    this.state.dispatch(scoreboardActions.setMode({mode:ScoreboardMode.POSITIVE_CORRECTION}));
  }

  negativeCorrectionMode(){
    this.state.dispatch(scoreboardActions.setMode({mode:ScoreboardMode.NEGATIVE_CORRECTION}));

  }

  changeNumberOfBallsMode(){
    this.state.dispatch(scoreboardActions.setMode({mode:ScoreboardMode.BALLS_LEFT_CORRECTION}));

  }

  protected readonly ScoreboardMode = ScoreboardMode;
}
