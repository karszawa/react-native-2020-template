import { Unsubscribe } from "firebase";

import { errorActions, ErrorCode } from "../ducks/error";
import { shopActions } from "../ducks/shop";
import { ThunkActionCreator } from "../types";

export const subscribeShopChange: ThunkActionCreator<{ shopId: string }, Unsubscribe> = ({
  shopId,
}) => (dispatch, getState, { firebaseRepository }) => {
  return firebaseRepository.subscribeShop(shopId, shop => {
    if (shop) {
      dispatch(shopActions.updateShop(shop));
    } else {
      dispatch(errorActions.updateError({ code: ErrorCode.SHOP_NOT_FOUND }));
    }
  });
};
