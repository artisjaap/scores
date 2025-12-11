import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SnookerLandingComponent} from './components/snooker-landing/snooker-landing.component';
import {SnookerScoreboardComponent} from './components/snooker-scoreboard/snooker-scoreboard.component';
import {RemoteControlSnookerComponent} from "./components/remote-control-snooker/remote-control-snooker.component";

const routes: Routes = [
   {
     path: "",
     component: SnookerLandingComponent,
      children: [
        {
          path: "scoreboard",
          component: SnookerScoreboardComponent
        },
        {
          path: "remote-control",
          component: RemoteControlSnookerComponent
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
