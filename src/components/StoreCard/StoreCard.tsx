"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaAward } from "react-icons/fa6";
import PoligonCard from "@components/PoligonCard/PoligonCard";
import DroneSpeedSvg from "@components/DroneSpeedSvg/DroneSpeedSvg";
import DroneWeightSvg from "@components/DroneWeightSvg/DroneWeightSvg";
import Button from "@components/Button/Button";
import { CONSTANTS } from "@utils/constants";

import s from "./StoreCard.module.css";

type TSellCard = {
  category: string;
  productName: string;
  price: number;
  image: StaticImageData;
  hitLabel: string;
  productText: string;
  specifications: {
    speed: number;
    weight: number;
  };
};

interface IStoreCard {
  options: TSellCard;
}

const StoreCard = ({ options }: IStoreCard) => {
  const price = `${options.price} грн.`;
  return (
    <div className={s.cardWrapper}>
      <h2 className={s.cardTitle}>{options.category}</h2>
      <div className=" w-full flex justify-between">
        <h3 className={s.droneName}>{options.productName}</h3>
        <p className={s.price}>{price}</p>
      </div>
      <div className="relative w-full h-1/3">
        <Image
          className="kenburns-top"
          src={options.image}
          placeholder="blur"
          quality={100}
          alt={options.category}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className=" absolute bottom-0 left-0 ">
        <PoligonCard />
        <div className={s.award}>
          <FaAward size={70} />
        </div>
        <div className={s.hit}>
          <p className={s.hitText}>хіт</p>
        </div>
        <div className={s.thumbWrapper}>
          <p className={s.productText}>{options.productText}</p>
          <div className={s.specificationsWrapper}>
            <div className={s.specifications}>
              <div className={s.specificationsItem}>
                <DroneSpeedSvg />
                <p>{options.specifications.speed}</p>
              </div>
              <div className={s.specificationsItem}>
                <DroneWeightSvg />
                <p>{options.specifications.weight}</p>
              </div>
            </div>
            <div className={s.btn}>
              <Button
                variant="secondary"
                title={CONSTANTS.buttonBuyTitle}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
