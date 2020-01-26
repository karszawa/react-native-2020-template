import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { ConfigType } from "../config";
import { FirebaseRepository } from "../infrastructure/firebase/repository";
import { errorReducer } from "./ducks/error";
import { shopReducer } from "./ducks/shop";
import { Extra } from "./types";

export const createStore = (config: ConfigType) => {
  const extra: Extra = {
    firebaseRepository: new FirebaseRepository(config.firebase),
  };

  return configureStore({
    reducer: combineReducers({
      error: errorReducer,
      shop: shopReducer,
    }),
    middleware: [thunk.withExtraArgument(extra)],
  });
};
