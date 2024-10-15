import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SnookerLandingComponent} from './components/snooker-landing/snooker-landing.component';
import {SnookerScoreboardComponent} from './components/snooker-scoreboard/snooker-scoreboard.component';

const routes: Routes = [
   {
     path: "",
     component: SnookerLandingComponent,
      children: [
        {
          path: "scoreboard",
          component: SnookerScoreboardComponent
        }
    ]
   }

];

@NgModule({
  providers: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnookerRoutingModule {


}
