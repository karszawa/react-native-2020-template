/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ErrorCode {
  SHOP_NOT_FOUND = "SHOP_NOT_FOUND",
}

export interface ErrorState {
  code?: ErrorCode;
}

const initialState: ErrorState = {};

const slice = createSlice({
  name: "error",
  initialState,
  reducers: {
    updateError(state, action: PayloadAction<{ code: ErrorCode }>) {
      // NOTE: No to override an error
      if (!state.code) {
        state.code = action.payload.code;
      }
    },
  },
});

export const errorActions = slice.actions;
export const errorReducer = slice.reducer;
