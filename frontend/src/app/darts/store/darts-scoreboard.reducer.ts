import * as fromTheScoreboardReducer from './darts-scoreboard-the-scoreboard.reducer'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export const dartsScoreboardFeatureKey = 'dartsScoreboard'

export interface ScoreboardState {
  [fromTheScoreboardReducer.theDartsScoreboardFeatureKey]: fromTheScoreboardReducer.TheDartsScoreboardState;
}

export const reducers: ActionReducerMap<ScoreboardState> = {
  [fromTheScoreboardReducer.theDartsScoreboardFeatureKey]: fromTheScoreboardReducer.theDartsScoreboardReducer
}


export const getScoreboardState = createFeatureSelector<ScoreboardState>(dartsScoreboardFeatureKey);
export const getTheDartsScoreboardState = createSelector(getScoreboardState, state => state[fromTheScoreboardReducer.theDartsScoreboardFeatureKey]);

