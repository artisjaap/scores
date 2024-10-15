import {getTheScoreboardState} from './snooker-scoreboard.reducer';
import {createSelector} from '@ngrx/store';

export const getPlayer1 = createSelector(getTheScoreboardState, state => state.player1);
export const getPlayer2 = createSelector(getTheScoreboardState, state => state.player2);
export const getTableStats = createSelector(getTheScoreboardState, state => state.tableStats);
export const getMode = createSelector(getTheScoreboardState, state => state.mode);
