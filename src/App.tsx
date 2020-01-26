import React, { useMemo } from "react";
import { Provider } from "react-redux";

import { config } from "./config";
import { RootNavigator } from "./navigators/RootNavigator";
import { createStore } from "./store/store";

// const makeSureFirebaseConnectionWorksWell = () => {
//   const repository = useMemo(() => {
//     return new FirebaseRepository(config);
//   }, []);

//   useEffect(() => {
//     repository.getShop("5FSBplkCIAtnt2rPNzYp").then(store => {
//       console.log({ storeId: store.id });
//     });
//   }, [repository]);
// };

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
