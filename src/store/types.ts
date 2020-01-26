import { ThunkAction } from "@reduxjs/toolkit";

import { APIClient } from "../infrastructure/api/APIClient";
import { FirebaseRepository } from "../infrastructure/firebase/repository";
import { errorActions, ErrorState } from "./ducks/error";
import { shopActions, ShopState } from "./ducks/shop";
import { userActions, UserState } from "./ducks/user";

export interface State {
  error: ErrorState;
  user: UserState;
  shop: ShopState;
}

type ActionTypes<T> = T[keyof T] extends (...args: any[]) => infer U ? U : never;

export type Action =
  | ActionTypes<typeof shopActions>
  | ActionTypes<typeof userActions>
  | ActionTypes<typeof errorActions>;

export interface Extra {
  api: APIClient;
  firebaseRepository: FirebaseRepository;
}

export type ThunkResult<R> = ThunkAction<R, State, Extra, Action>;
export type ThunkActionCreator<Args = undefined, Result = undefined> = (
  args: Args
) => ThunkResult<Result>;
