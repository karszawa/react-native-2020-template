import "firebase/firestore";

import firebase, { firestore } from "firebase/app";

import { FirebaseConfigType } from "../../config";
import { Shop } from "./data";

type ShopCollectionType = firestore.CollectionReference<Shop>;

export class FirebaseRepository {
  private db: firestore.Firestore;

  private shopsRef: ShopCollectionType;

  static App: firebase.app.App;

  constructor(config: FirebaseConfigType) {
    const [app] = firebase.apps;

    FirebaseRepository.App = app || firebase.initializeApp(config);
    this.db = FirebaseRepository.App.firestore();
    this.shopsRef = this.db.collection("shops") as ShopCollectionType;
  }

  getShop(id: string) {
    return this.shopsRef.doc(id).get();
  }

  subscribeShop(id: string, callback: (shop: Shop | undefined) => void) {
    return this.shopsRef.doc(id).onSnapshot(snapshot => {
      callback(snapshot.data());
    });
  }
}
