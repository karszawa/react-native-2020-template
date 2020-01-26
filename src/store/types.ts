import { ThunkAction } from "@reduxjs/toolkit";

import { FirebaseRepository } from "../infrastructure/firebase/repository";
import { errorActions, ErrorState } from "./ducks/error";
import { shopActions, ShopState } from "./ducks/shop";

export interface State {
  error: ErrorState;
  shop: ShopState;
}

type ActionTypes<T> = T[keyof T] extends (...args: any[]) => infer U ? U : never;

export type Action = ActionTypes<typeof shopActions> | ActionTypes<typeof errorActions>;

export interface Extra {
  firebaseRepository: FirebaseRepository;
}

export type ThunkResult<R> = ThunkAction<R, State, Extra, Action>;
export type ThunkActionCreator<Args, Result> = (args: Args) => ThunkResult<Result>;
