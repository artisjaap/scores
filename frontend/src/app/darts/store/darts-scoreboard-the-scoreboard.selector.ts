import {createSelector} from '@ngrx/store';
import {getTheDartsScoreboardState} from './darts-scoreboard.reducer';

export const getPlayer1 = createSelector(getTheDartsScoreboardState, state => state.player1);
export const getPlayer2 = createSelector(getTheDartsScoreboardState, state => state.player2);
export const getCurrentDarts = createSelector(getTheDartsScoreboardState, state => state.currentDarts);
