import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DartsboardLandingComponent} from './components/dartsboard-landing/dartsboard-landing.component';
import {DartsboardComponent} from './components/dartsboard/dartsboard.component';

const routes: Routes = [
  {
    path: "",
    component: DartsboardLandingComponent,
    children: [
      {
        path: "scoreboard",
        component: DartsboardComponent
      }
    ]
  }

];

@NgModule({
  providers: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DartsRoutingModule {


}
