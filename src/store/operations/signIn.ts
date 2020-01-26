import { userActions } from "../ducks/user";
import { ThunkActionCreator } from "../types";

export const signIn: ThunkActionCreator<undefined, Promise<boolean>> = () => async (
  dispatch,
  getState,
  { api }
) => {
  const { uid } = await api.postSignIn({ username: "dummy", password: "dummy" });

  await new Promise(resolve => setTimeout(resolve, 2000));

  dispatch(userActions.updateUser({ uid }));

  return Boolean(uid);
};
