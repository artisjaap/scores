import { Component } from '@angular/core';
import {TheDartsScoreboardState} from '../../store/darts-scoreboard-the-scoreboard.reducer';
import {Store} from '@ngrx/store';
import {addDart} from '../../store/darts-scoreboard-the-scoreboard.actions';

@Component({
    selector: 'app-dartsboard',
    templateUrl: './dartsboard.component.html',
    styleUrls: ['./dartsboard.component.scss'],
    standalone: false
})
export class DartsboardComponent {

  constructor(private store:Store<TheDartsScoreboardState>) {
  }
  addDart(score:string) {
    this.store.dispatch(addDart({score}));
  }
}
