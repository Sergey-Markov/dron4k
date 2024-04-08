import React from "react";
import Image from "next/image";
import heroBg from "@images/store_bg.png";
import StoreCard from "@components/StoreCard/StoreCard";

import s from "./Store.module.css";
import { CONSTANTS } from "@utils/constants";

const Store = () => {
  return (
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
};

export default Store;
