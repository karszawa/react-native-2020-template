import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { ConfigType } from "../config";
import { createAPIClient } from "../infrastructure/api/APIClient";
import { FirebaseRepository } from "../infrastructure/firebase/repository";
import { errorReducer } from "./ducks/error";
import { shopReducer } from "./ducks/shop";
import { userReducer } from "./ducks/user";
import { Extra } from "./types";

export const createStore = (config: ConfigType) => {
  const extra: Extra = {
    api: createAPIClient({ mocked: true }),
    firebaseRepository: new FirebaseRepository(config.firebase),
  };

  return configureStore({
    reducer: combineReducers({
      error: errorReducer,
      user: userReducer,
      shop: shopReducer,
    }),
    middleware: [thunk.withExtraArgument(extra)],
  });
};
