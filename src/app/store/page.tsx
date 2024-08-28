import React from "react";

import { CONSTANTS } from "@utils/constants";
import StoreCard from "@components/StoreCard/StoreCard";

import s from "./Store.module.css";

const Store = () => (
  <main
    id="store"
    className={s.storeSection}
  >
    <div className={s.storeCards}>
      {CONSTANTS.sellCards.map((item, ind) => {
        const keyGen = `sellCard${ind}`;
        return (
          <StoreCard
            key={keyGen}
            options={item}
          />
        );
      })}

      {/* <StoreCard /> */}
    </div>
  </main>
);

export default Store;
