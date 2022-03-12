import TestStore from "./testStore";

export class RootStore {
  testStore: TestStore;

  constructor() {
    this.testStore = new TestStore(this);
  }
}

export const rootStore = new RootStore();
