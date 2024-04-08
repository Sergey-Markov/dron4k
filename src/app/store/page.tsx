import React from "react";
import Image from "next/image";
import heroBg from "@images/store_bg.png";
import StoreCard from "@components/StoreCard/StoreCard";

import s from "./Store.module.css";
import { CONSTANTS } from "@utils/constants";

const Store = () => {
  return (
    <section
      id="store"
      className={s.storeSection}
    >
      <Image
        className="kenburns-top"
        src={heroBg}
        placeholder="blur"
        quality={100}
        alt=" FVP дрон"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div>
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
    </section>
  );
};

export default Store;
