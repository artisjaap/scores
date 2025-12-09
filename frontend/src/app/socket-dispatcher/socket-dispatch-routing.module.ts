import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebsocketDemoComponent} from "./components/WebsocketDemoComponent";

const routes: Routes = [
  {
    path: "websocket-demo",
    component: WebsocketDemoComponent,

  }

];

@NgModule({
  providers: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocketDispatchRoutingModule {


}
