"use client";

import React from "react";

import Button from "@components/Button/Button";
import { CONSTANTS } from "@utils/constants";
import LuminosityCard from "@components/ui/luminosity-card";
import s from "./CourseCard.module.css";

type TOptions = {
  type: string;
  title: string;
  price: string;
  droneLabel: string;
  drones: string;
  termsLabel: string;
  termsTeori: string;
  termsPractic: string;
  studentsText: string;
  sertificateText: string;
};
interface ICourseCard {
  type?: string;
  options: TOptions;
}

const CourseCard = ({ type = "operator", options }: ICourseCard) => {
  const index = type === "operator" ? "01/ОПЕРАТОР" : "02/ІНЖЕНЕР";

  return (
    <LuminosityCard
      size="compact"
      className={s.card}
    >
      <span className={s.index}>{index}</span>
      <div className={s.headerRow}>
        <h2 className={s.title}>{options.title}</h2>
        <span className={s.price}>{options.price}</span>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <h3 className={s.label}>{options.droneLabel}</h3>
          <p className={s.text}>{options.drones}</p>
        </li>
        <li className={s.item}>
          <h3 className={s.label}>{options.termsLabel}</h3>
          <p className={s.text}>{options.termsTeori}</p>
          <p className={s.text}>{options.termsPractic}</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>{options.studentsText}</p>
          <p className={s.text}>{options.sertificateText}</p>
        </li>
      </ul>
      <div className={s.footer}>
        <Button
          variant="laser"
          title="Придбати"
          href={`mailto:${CONSTANTS.companyEmail}?subject=${encodeURIComponent(
            `Запис на курс "${options.title}"`,
          )}`}
        />
      </div>
    </LuminosityCard>
  );
};
export default CourseCard;
