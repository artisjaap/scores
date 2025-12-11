import * as fromTheScoreboardReducer from "./scoreboard-the-scoreboard.reducer";
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export const scoreboardFeatureKey = 'scoreboard'

export interface ScoreboardState {
  [fromTheScoreboardReducer.theScoreboardFeatureKey]: fromTheScoreboardReducer.ScoreboardState;
}

export const reducers: ActionReducerMap<ScoreboardState> = {
  [fromTheScoreboardReducer.theScoreboardFeatureKey]: fromTheScoreboardReducer.theScoreboardReducer
}


export const getScoreboardState = createFeatureSelector<ScoreboardState>(scoreboardFeatureKey);
export const getTheScoreboardState = createSelector(getScoreboardState, state => state[fromTheScoreboardReducer.theScoreboardFeatureKey]);

