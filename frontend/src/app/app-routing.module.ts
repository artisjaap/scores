import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScoresDashboardComponent} from './scores-dashboard/scores-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: ScoresDashboardComponent
  },
  {
    path: "snooker",
    loadChildren: () => import('./snooker/snooker.module').then(m => m.SnookerModule)
  },
  {
    path: "darts",
    loadChildren: () => import('./darts/darts.module').then(m => m.DartsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
