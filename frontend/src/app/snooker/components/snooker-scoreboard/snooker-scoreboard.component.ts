import {Component} from '@angular/core';
import {TheScoreboardState} from '../../store/snooker-scoreboard-the-scoreboard.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PlayerStats} from '../../model/model';
import {getPlayer1, getPlayer2} from '../../store/snooker-scoreboard-the-scoreboard.selector';

@Component({
    selector: 'app-scoreboard',
    templateUrl: './snooker-scoreboard.component.html',
    styleUrls: ['./snooker-scoreboard.component.scss'],
    standalone: false
})
export class SnookerScoreboardComponent {


  public player1$: Observable<PlayerStats>;
  public player2$: Observable<PlayerStats>;
  constructor(private state: Store<TheScoreboardState>) {
    this.player1$ = this.state.select(getPlayer1);
    this.player2$ = this.state.select(getPlayer2);
  }


}
