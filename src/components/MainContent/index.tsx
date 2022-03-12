import * as React from "react";
import { useStores } from "../../hooks/useStores";

import styles from "./styles.module.scss";

const MainContent = () => {
  const { testStore } = useStores();
  const { status } = testStore;

  console.log({ status });

  return (
    <div className={styles.container}>
      <h1>Hello world</h1>
    </div>
  );
};

export default MainContent;
