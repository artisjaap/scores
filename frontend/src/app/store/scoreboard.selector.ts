import {createSelector} from "@ngrx/store";
import {getTheScoreboardState} from "./scoreboard.reducer";

export const getRemote = createSelector(getTheScoreboardState, state => state.remote);
