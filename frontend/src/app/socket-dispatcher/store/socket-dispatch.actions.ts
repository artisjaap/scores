import {createAction, props} from "@ngrx/store";
import {ScoreboardMode} from "../../snooker/model/model";

export const messageReceived = createAction('[SOCKET-DISPATCH - message received]', props<{command:string}>());
export const noCommandOperation = createAction('[SOCKET-DISPATCH - no operation]');
