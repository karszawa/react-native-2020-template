/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  uid?: string;
}

const initialState: UserState = {};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<UserState>) {
      Object.assign(state, action.payload);
    },
  },
});

export const userActions = slice.actions;
export const userReducer = slice.reducer;
