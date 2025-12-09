import {Action, createReducer} from '@ngrx/store';

export const theSocketDispatchFeatureKey = 'theSocketDispatcher';


export interface SocketDispatchState {


}

export const theSocketDispatchInitialState: SocketDispatchState = {};

const createTheSocketDispatchReducer = createReducer(
  theSocketDispatchInitialState,

);

export function theSocketDispatchReducer(state: SocketDispatchState | undefined, action: Action) {
  return createTheSocketDispatchReducer(state, action);
}
