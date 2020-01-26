/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Shop } from "../../infrastructure/firebase/data";

export interface ShopState extends Partial<Shop> {}

const initialState: ShopState = {};

const slice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateShop(state, action: PayloadAction<ShopState>) {
      Object.assign(state, action.payload);
    },
  },
});

export const shopActions = slice.actions;
export const shopReducer = slice.reducer;
