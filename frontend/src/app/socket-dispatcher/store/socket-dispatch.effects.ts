import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, noop} from "rxjs";
import {messageReceived, noCommandOperation} from "./socket-dispatch.actions";
import {potBlack, potRed, potYellow} from "../../snooker/store/snooker-scoreboard-the-scoreboard.actions";

@Injectable()
export class SocketDispatchEffects {

  messageReceived$ = createEffect(
    () => this.actions$.pipe(
      ofType(messageReceived),
      map(message => {
        switch(message.command) {
          case "pot red": return potRed();
          case "pot yellow": return potYellow();
          case "pot black": return potBlack();
        }
        return noCommandOperation()
      })
    )
  );

  constructor(private actions$: Actions){
  }
}
