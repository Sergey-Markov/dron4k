import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import CourseCard from "@components/CourseCard/CourseCard";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";
import { CONSTANTS } from "@utils/constants";
import constructBg from "@images/construct.png";
import operatorBg from "@images/operator.png";
import s from "./Courses.module.css";

export const metadata: Metadata = {
  title: "Курси навчання",
  description:
    "Курс оператора БПЛА (6 днів, до 20 курсантів) та курс інженера БПЛА (10 днів, до 5 курсантів) в школі Dron4k. Теорія, практичні польоти та сертифікація.",
};

const Courses = () => (
  <main className={s.main}>
    <div
      id="operator"
      className={s.section}
    >
      <Image
        className="kenburns-top"
        src={operatorBg}
        placeholder="blur"
        alt="Оператор БПЛА за керуванням дроном"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover", zIndex: -2 }}
      />
      <div className={s.overlay} />
      <ScrollReveal>
        <CourseCard
          type="operator"
          options={CONSTANTS.courseOperator}
        />
      </ScrollReveal>
    </div>
    <div
      id="construct"
      className={s.section}
    >
      <Image
        className="kenburns-top"
        src={constructBg}
        placeholder="blur"
        alt="Конструювання та налаштування БПЛА"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover", zIndex: -2 }}
      />
      <div className={s.overlay} />
      <ScrollReveal delay={120}>
        <CourseCard
          type="construct"
          options={CONSTANTS.courseConstruct}
        />
      </ScrollReveal>
    </div>
  </main>
);

export default Courses;
