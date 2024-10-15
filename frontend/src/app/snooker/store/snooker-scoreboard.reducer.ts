import * as fromTheScoreboardReducer from './snooker-scoreboard-the-scoreboard.reducer'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export const snookerScoreboardFeatureKey = 'snookerScoreboard'

export interface ScoreboardState {
  [fromTheScoreboardReducer.theScoreboardFeatureKey]: fromTheScoreboardReducer.TheScoreboardState;
}

export const reducers: ActionReducerMap<ScoreboardState> = {
  [fromTheScoreboardReducer.theScoreboardFeatureKey]: fromTheScoreboardReducer.theScoreboardReducer
}


export const getScoreboardState = createFeatureSelector<ScoreboardState>(snookerScoreboardFeatureKey);
export const getTheScoreboardState = createSelector(getScoreboardState, state => state[fromTheScoreboardReducer.theScoreboardFeatureKey]);

