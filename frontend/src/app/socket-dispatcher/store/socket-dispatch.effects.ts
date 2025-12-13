import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map} from "rxjs";
import {messageReceived, noCommandOperation} from "./socket-dispatch.actions";
import {
  newGame,
  potBlack,
  potBlue,
  potBrown,
  potGreen,
  potPink,
  potRed,
  potYellow, restart,
  setMode, setPlayer1Name, setPlayer2Name,
  turnPlayer
} from "../../snooker/store/snooker-scoreboard-the-scoreboard.actions";
import {ScoreboardMode} from "../../snooker/model/model";
import {showRemoteControlQr} from "../../store/scoreboard.actions";

@Injectable()
export class SocketDispatchEffects {

  messageReceived$ = createEffect(
    () => this.actions$.pipe(
      ofType(messageReceived),
      map(message => {
        switch(message.command) {
          case "pot red": return potRed();
          case "pot yellow": return potYellow();
          case "pot green": return potGreen();
          case "pot brown": return potBrown();
          case "pot blue": return potBlue();
          case "pot pink": return potPink();
          case "pot black": return potBlack();
          case "turn player": return turnPlayer();
          case "new game": return newGame();
          case "mode normal": return setMode({mode: ScoreboardMode.NORMAL});
          case "mode fault": return setMode({mode: ScoreboardMode.FAULT});
          case "mode negative correction": return setMode({mode: ScoreboardMode.NEGATIVE_CORRECTION});
          case "mode positive correction": return setMode({mode: ScoreboardMode.POSITIVE_CORRECTION});
          case "toggle remote": return showRemoteControlQr();
          case "restart": return restart();
        }

        //regex commands
        switch(true){
          case /update player ([1-2]) name\(.+\)/.test(message.command):

            const player = message.command.match(/update player ([1-2]) name\((.+)\)/);

            if(player){
              if(player[1] === "1"){
                return setPlayer1Name({name: player[2]});
              }
              if(player[1] === "2"){
                return setPlayer2Name({name: player[2]});
              }
            }

            break;

        }
        return noCommandOperation()
      })
    )
  );

  constructor(private actions$: Actions){
  }
}
