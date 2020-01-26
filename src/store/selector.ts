import { State } from "./types";

export const selectIsLoggedIn = (state: State) => Boolean(state.user.uid);
