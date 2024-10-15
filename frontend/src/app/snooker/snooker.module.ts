import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as snookerScoreboardReducer from './store/snooker-scoreboard.reducer';
import {SnookerRoutingModule} from './snooker-routing.module';

import { SnookerControlsComponent } from './components/controls/snooker-controls.component';
import { SnookerLandingComponent } from './components/snooker-landing/snooker-landing.component';
import {StoreModule} from '@ngrx/store';
import {SnookerPlayerComponent} from './components/snooker-player/snooker-player.component';
import {SnookerScoreboardComponent} from './components/snooker-scoreboard/snooker-scoreboard.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    SnookerScoreboardComponent,
    SnookerPlayerComponent,
    SnookerControlsComponent,
    SnookerLandingComponent
  ],
  imports: [
    CommonModule,
    SnookerRoutingModule,
    StoreModule.forFeature(snookerScoreboardReducer.snookerScoreboardFeatureKey, snookerScoreboardReducer.reducers),
    MatButtonModule
  ]
})
export class SnookerModule { }
