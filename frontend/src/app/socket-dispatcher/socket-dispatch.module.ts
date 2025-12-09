import {NgModule, OnDestroy} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Store, StoreModule} from "@ngrx/store";
import * as snookerScoreboardReducer from "../snooker/store/snooker-scoreboard.reducer";
import {MatButtonModule} from "@angular/material/button";
import {WebSocketService} from "./services/websocket.service";
import {Subscription} from "rxjs";
import {WebsocketDemoComponent} from "./components/WebsocketDemoComponent";
import {FormsModule} from "@angular/forms";
import {SocketDispatchRoutingModule} from "./socket-dispatch-routing.module";
import {TheScoreboardState} from "../snooker/store/snooker-scoreboard-the-scoreboard.reducer";
import {SocketDispatchState} from "./store/socket-dispatch-the-dispatch.reducer";
import {messageReceived} from "./store/socket-dispatch.actions";
import {EffectsModule} from "@ngrx/effects";
import {SocketDispatchEffects} from "./store/socket-dispatch.effects";

@NgModule({
  declarations: [
    WebsocketDemoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature(snookerScoreboardReducer.snookerScoreboardFeatureKey, snookerScoreboardReducer.reducers),

    EffectsModule.forFeature([SocketDispatchEffects]),

    MatButtonModule,
    SocketDispatchRoutingModule
  ],
  providers: [WebSocketService],
})
export class SocketDispatchModule implements OnDestroy {
  private wsSub: Subscription = new Subscription();

  constructor(private websocketService: WebSocketService, private state: Store<SocketDispatchState>) {
    // Open WebSocket connection when this module is loaded by subscribing once.
    this.wsSub = this.websocketService.messages$.subscribe({
      next: (message) => {
        console.log(message);
        state.dispatch(messageReceived({command: message.message}));
        /* noop: presence of subscription ensures connection is established */},
      error: () => {/* handled inside service; no-op here */}
    });
  }

  ngOnDestroy(): void {
    if (this.wsSub) {
      this.wsSub.unsubscribe();
    }
  }
}
