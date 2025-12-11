import {Action, createReducer, on} from '@ngrx/store';
import {turnPlayer} from "../snooker/store/snooker-scoreboard-the-scoreboard.actions";
import {TheScoreboardState} from "../snooker/store/snooker-scoreboard-the-scoreboard.reducer";
import {showRemoteControlQr} from "./scoreboard.actions";

export const theScoreboardFeatureKey = 'theScoreboard';


export interface ScoreboardState {
  remote: string
}

export const theScoreboardInitialState: ScoreboardState = {
  remote: ""
};

const createTheScoreboardReducer = createReducer(
  theScoreboardInitialState,

  on(showRemoteControlQr, (state: ScoreboardState) => ({
    ...state,
    remote: state.remote==""?window.location.pathname:""

  })),

);

export function theScoreboardReducer(state: ScoreboardState | undefined, action: Action) {
  return createTheScoreboardReducer(state, action);
}
