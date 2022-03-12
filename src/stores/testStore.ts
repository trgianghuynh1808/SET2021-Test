import { observable, makeObservable } from "mobx";
import { RootStore } from "./index";

class TestStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      status: observable,
    });

    this.rootStore = rootStore;
  }

  status: boolean = true;
}

export default TestStore;
