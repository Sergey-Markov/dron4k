import React from "react";
import Image from "next/image";
import PoligonCard from "@components/PoligonCard/PoligonCard";
import dron1 from "@images/drone1_sell.png";

import s from "./StoreCard.module.css";

const StoreCard = () => {
  return (
    <div className={s.cardWrapper}>
      <h2 className={s.cardTitle}>FPV Drone</h2>
      <h3 className={s.droneName}>
        iFlight XL10 V6 Analog 6S BNF 5.8G 1.6W ELRS 868/915MHz
      </h3>
      <div className="relative w-full h-1/3">
        <Image
          className="kenburns-top"
          src={dron1}
          placeholder="blur"
          quality={100}
          alt=" FVP дрон"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <p>card</p>
      <div className=" absolute bottom-0 left-0 ">
        <PoligonCard />
      </div>
    </div>
  );
};

export default StoreCard;
