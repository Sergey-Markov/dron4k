"use client";

import React from "react";

import Button from "@components/Button/Button";
import classNames from "classnames";
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
  const cardType = classNames([
    type === "operator" ? s.cardView : s.constructView,
  ]);

  return (
    <div className={cardType}>
      <div className="relative mb-6">
        <h2 className={s.title}>{options.title}</h2>
        <h2 className={s.price}>{options.price}</h2>
      </div>
      <ol className={s.list}>
        <li className={s.item}>
          <h3 className={s.label}>{options.droneLabel}</h3>
          <p className={s.text}>{options.drones}</p>
        </li>
        <li className={s.item}>
          <h3 className={s.label}>{options.termsLabel}</h3>
          <ul>
            <li>
              <p className={s.text}>{options.termsTeori}</p>
            </li>
            <li>
              <p className={s.text}>{options.termsPractic}</p>
            </li>
            <li className={s.item}>
              <p className={s.text}>{options.studentsText}</p>
            </li>
            <li className={s.item}>
              <p className={s.text}>{options.sertificateText}</p>
            </li>
          </ul>
        </li>
      </ol>
      <Button
        variant="primary"
        title="Придбати"
        onClick={() => {}}
      />
    </div>
  );
};
export default CourseCard;
