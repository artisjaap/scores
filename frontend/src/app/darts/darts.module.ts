import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DartsboardComponent } from './components/dartsboard/dartsboard.component';
import { DartsboardLandingComponent } from './components/dartsboard-landing/dartsboard-landing.component';
import {DartsRoutingModule} from './darts-routing.module';
import {StoreModule} from '@ngrx/store';
import * as dartsScoreboardReducer from './store/darts-scoreboard.reducer';
import { DartsScoreboardComponent } from './components/darts-scoreboard/darts-scoreboard.component';
import { DartsScoresComponent } from './components/darts-scores/darts-scores.component';
import { DartsScoreHistoryComponent } from './components/darts-score-history/darts-score-history.component';
import { DartsPlayerScoreComponent } from './components/darts-player-score/darts-player-score.component';
import { DartsboardTableComponent } from './components/dartsboard-table/dartsboard-table.component';



@NgModule({
  declarations: [
    DartsboardComponent,
    DartsboardLandingComponent,
    DartsScoreboardComponent,
    DartsScoresComponent,
    DartsScoreHistoryComponent,
    DartsPlayerScoreComponent,
    DartsboardTableComponent,

  ],
  imports: [
    CommonModule,
    DartsRoutingModule,
    StoreModule.forFeature(dartsScoreboardReducer.dartsScoreboardFeatureKey, dartsScoreboardReducer.reducers),
  ]
})
export class DartsModule { }
