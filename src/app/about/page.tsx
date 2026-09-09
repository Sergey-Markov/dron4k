import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import dronOperator from "@images/dron_operator.png";
import drone3D from "@images/drone_3D.png";
import home from "@images/home.png";
import fpvDronOperator from "@images/FPV_dron_operator.png";
import team from "@images/team.png";
import page from "@images/web_page.png";
import { CONSTANTS } from "@utils/constants";
import Button from "@components/Button/Button";
import LuminosityCard from "@components/ui/luminosity-card";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";

import s from "./About.module.css";

export const metadata: Metadata = {
  title: "Про нас",
  description:
    "Dron4k — команда інструкторів та інженерів БПЛА. Дізнайтеся про наше бачення, підхід до навчання та технічне оснащення.",
};

const {
  aboutTitle,
  aboutText,
  teamVisionTitle,
  teamVisionTextUp,
  teamVisionTextDown,
  buttonInterestTitle,
  companyEmail,
} = CONSTANTS;

const photoFrame = (src: typeof dronOperator, alt: string, grayscale = false) => (
  <div className={s.photoFrame}>
    <Image
      src={src}
      placeholder="blur"
      alt={alt}
      fill
      sizes="(max-width: 768px) 50vw, 20vw"
      style={{ objectFit: "cover" }}
      className={grayscale ? "grayscale" : undefined}
    />
  </div>
);

function About() {
  return (
    <main className={s.main}>
      <ScrollReveal>
        <section className={s.section}>
          <LuminosityCard className={s.card}>
            <span className={s.index}>01/ABOUT</span>
            <h2 className={s.heading}>{aboutTitle}</h2>
            <p className={s.text}>{aboutText}</p>
            <div className={s.photoRow}>
              {photoFrame(dronOperator, "Оператор керує FPV-дроном", true)}
              {photoFrame(drone3D, "3D-модель дрона Dron4k")}
              {photoFrame(home, "Дрон у польоті над полем")}
            </div>
          </LuminosityCard>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className={s.section}>
          <LuminosityCard className={s.card}>
            <span className={s.index}>02/VISION</span>
            <h2 className={s.heading}>{teamVisionTitle}</h2>
            <p className={s.text}>{teamVisionTextUp}</p>
            <p className={s.text}>{teamVisionTextDown}</p>
            <div className={s.photoRow}>
              {photoFrame(fpvDronOperator, "Оператор FPV-дрона готується до польоту")}
              {photoFrame(team, "Команда школи Dron4k")}
              {photoFrame(page, "Сторінка сайту Dron4k", true)}
            </div>
            <div className={s.button}>
              <Button
                title={buttonInterestTitle}
                variant="laser"
                href={`mailto:${companyEmail}?subject=${encodeURIComponent("Цікавить навчання Dron4k")}`}
              />
            </div>
          </LuminosityCard>
        </section>
      </ScrollReveal>
    </main>
  );
}

export default About;
