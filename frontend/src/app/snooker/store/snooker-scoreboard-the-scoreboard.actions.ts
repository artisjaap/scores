import {createAction, props} from '@ngrx/store';
import {ScoreboardMode} from '../model/model';

export const turnPlayer = createAction('[THE-SCOREBOARD - turn player]');
export const potRed = createAction('[THE-SCOREBOARD - pot red]');
export const potYellow = createAction('[THE-SCOREBOARD - pot yellow]');
export const potGreen = createAction('[THE-SCOREBOARD - pot green]');
export const potBrown = createAction('[THE-SCOREBOARD - pot brown]');
export const potBlue = createAction('[THE-SCOREBOARD - pot blue]');
export const potPink = createAction('[THE-SCOREBOARD - pot pink]');
export const potBlack = createAction('[THE-SCOREBOARD - pot black]');
export const potWhite = createAction('[THE-SCOREBOARD - pot white]');
export const newGame = createAction('[THE-SCOREBOARD - new game]');
export const restart = createAction('[THE-SCOREBOARD - restart]');

export const setMode = createAction('[THE-SCOREBOARD - set mode]', props<{mode:ScoreboardMode}>());
export const setPlayer1Name = createAction('[THE-SCOREBOARD -set player 1 name]', props<{name:string}>());
export const setPlayer2Name = createAction('[THE-SCOREBOARD -set player 2 name]', props<{name:string}>());
