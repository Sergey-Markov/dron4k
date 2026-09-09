import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

import { CONSTANTS } from "@utils/constants";
import StoreCard from "@components/StoreCard/StoreCard";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";
import storeBg from "@images/store_bg.png";

import s from "./Store.module.css";

export const metadata: Metadata = {
  title: "Продаж дронів",
  description:
    "Купити FPV-дрон DJI в Dron4k: потужні двигуни, наджорстка рама, дрони для далеких польотів та зйомки.",
};

const Store = () => (
  <main
    id="store"
    className={s.storeSection}
  >
    <Image
      className="kenburns-top"
      src={storeBg}
      placeholder="blur"
      alt="Дрони на продаж у магазині Dron4k"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", zIndex: -2 }}
    />
    <div className={s.overlay} />
    <div className={s.storeCards}>
      {CONSTANTS.sellCards.map((item, ind) => {
        const keyGen = `sellCard${ind}`;
        return (
          <ScrollReveal
            key={keyGen}
            delay={ind * 80}
          >
            <StoreCard options={item} />
          </ScrollReveal>
        );
      })}
    </div>
  </main>
);

export default Store;
