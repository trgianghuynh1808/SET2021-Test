import * as React from "react";
import { Provider } from "mobx-react";
import { rootStore } from "./stores";

import MainContent from "./components/MainContent";

const App = () => {
  return (
    <Provider {...rootStore}>
      <MainContent />
    </Provider>
  );
};

export default App;
