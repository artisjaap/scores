import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {SnookerModule} from './snooker/snooker.module';
import {DartsModule} from './darts/darts.module';
import {ScoresDashboardComponent} from './scores-dashboard/scores-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoresDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(),

    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    SnookerModule,
    DartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
