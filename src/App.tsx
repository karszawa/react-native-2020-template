import "./infrastructure/sentry/setup";

import React, { useMemo } from "react";
import { Provider } from "react-redux";

import { config } from "./config";
import { RootNavigator } from "./navigators/RootNavigator";
import { createStore } from "./store/store";

export const App = () => {
  const store = useMemo(() => {
    return createStore(config);
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
