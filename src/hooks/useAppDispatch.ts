import { AnyAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { Extra, State } from "../store/types";

type AppDispatch = ThunkDispatch<State, Extra, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
