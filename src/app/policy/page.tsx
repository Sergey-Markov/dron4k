import React from "react";
import type { Metadata } from "next";
import { CONSTANTS } from "@utils/constants";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";

import s from "./Policy.module.css";

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description: "Політика конфіденційності Dron4k: які дані ми отримуємо і як їх використовуємо.",
};

const { policyPageTitle, policyPageIntro, policyPageSections } = CONSTANTS;

function Policy() {
  return (
    <main className={s.main}>
      <ScrollReveal className={s.intro}>
        <span className={s.index}>00/POLICY</span>
        <h1 className={s.title}>{policyPageTitle}</h1>
        <p className={s.introText}>{policyPageIntro}</p>
      </ScrollReveal>
      {policyPageSections.map((section, ind) => (
        <ScrollReveal
          key={section.title}
          delay={ind * 60}
          className={s.section}
        >
          <span className={s.sectionIndex}>{String(ind + 1).padStart(2, "0")}</span>
          <div>
            <h2 className={s.sectionTitle}>{section.title}</h2>
            <p className={s.text}>{section.text}</p>
          </div>
        </ScrollReveal>
      ))}
    </main>
  );
}

export default Policy;
