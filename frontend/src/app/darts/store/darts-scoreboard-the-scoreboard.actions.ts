import {createAction, props} from '@ngrx/store';

export const turnPlayer = createAction('[THE-DARTS-SCOREBOARD - turn player]');
export const addDart = createAction('[THE-DARTS-SCOREBOARD - add dart]', props<{score:string}>())

export const clearCurrentDartSet = createAction('[THE-DARTS-SCOREBOARD -clear current dart set]');
export const commitScore = createAction('[THE-DARTS-SCOREBOARD - commit score]')
