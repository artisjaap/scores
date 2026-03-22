import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {TheScoreboardState} from "../../store/snooker-scoreboard-the-scoreboard.reducer";
import {getGameHistory, getMode, getTableStats} from "../../store/snooker-scoreboard-the-scoreboard.selector";
import {Observable} from "rxjs";
import {GameHistory, TableStats} from "../../model/model";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-game-history',
  imports: [
    AsyncPipe,
    NgClass
  ],
  templateUrl: './game-history.component.html',
  styleUrl: './game-history.component.scss',
  standalone: true
})
export class GameHistoryComponent {

  public gameHistory$: Observable<GameHistory[]>;

  constructor(private state: Store<TheScoreboardState>) {
    this.gameHistory$ = this.state.select(getGameHistory);

  }
}
