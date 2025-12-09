import * as fromTheSocketDispatchReducer from "./socket-dispatch-the-dispatch.reducer";
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export const socketDispatchFeatureKey = 'socketDispatch'

export interface SocketDispatchState {
  [fromTheSocketDispatchReducer.theSocketDispatchFeatureKey]: fromTheSocketDispatchReducer.SocketDispatchState;
}

export const reducers: ActionReducerMap<SocketDispatchState> = {
  [fromTheSocketDispatchReducer.theSocketDispatchFeatureKey]: fromTheSocketDispatchReducer.theSocketDispatchReducer
}
