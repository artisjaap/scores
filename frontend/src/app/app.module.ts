import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


import * as scoreboardReducer from "./store/scoreboard.reducer";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {SnookerModule} from './snooker/snooker.module';
import {DartsModule} from './darts/darts.module';
import {ScoresDashboardComponent} from './scores-dashboard/scores-dashboard.component';
import {SocketDispatchModule} from "./socket-dispatcher/socket-dispatch.module";
// import {theScoreboardReducer} from "./store/scoreboard-the-scoreboard.reducer";

@NgModule({
  declarations: [
    AppComponent,
    ScoresDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Register root store without reducers; register our scoreboard slice as a feature below
    StoreModule.forRoot({}),
    StoreModule.forFeature(scoreboardReducer.scoreboardFeatureKey, scoreboardReducer.reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    SnookerModule,
    DartsModule,
    SocketDispatchModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
