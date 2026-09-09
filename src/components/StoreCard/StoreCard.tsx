"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import DroneSpeedSvg from "@components/DroneSpeedSvg/DroneSpeedSvg";
import DroneWeightSvg from "@components/DroneWeightSvg/DroneWeightSvg";
import Button from "@components/Button/Button";
import LuminosityCard from "@components/ui/luminosity-card";
import { Badge } from "@components/ui/badge";
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
    <LuminosityCard
      size="compact"
      className={s.card}
    >
      <span className={s.category}>{options.category}</span>
      <Badge className={s.hit}>{options.hitLabel}</Badge>

      <div className={s.photoFrame}>
        <Image
          className="kenburns-top"
          src={options.image}
          placeholder="blur"
          alt={`${options.category}: ${options.productName}`}
          fill
          sizes="(max-width: 768px) 90vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={s.headerRow}>
        <h3 className={s.droneName}>{options.productName}</h3>
        <span className={s.price}>{price}</span>
      </div>

      <p className={s.productText}>{options.productText}</p>

      <div className={s.footer}>
        <div className={s.specifications}>
          <div className={s.specificationsItem}>
            <DroneSpeedSvg size={22} />
            <p>{options.specifications.speed}</p>
          </div>
          <div className={s.specificationsItem}>
            <DroneWeightSvg />
            <p>{options.specifications.weight}</p>
          </div>
        </div>
        <Button
          variant="laser"
          title={CONSTANTS.buttonBuyTitle}
          href={`mailto:${CONSTANTS.companyEmail}?subject=${encodeURIComponent(
            `Придбати "${options.productName}"`,
          )}`}
        />
      </div>
    </LuminosityCard>
  );
};

export default StoreCard;
