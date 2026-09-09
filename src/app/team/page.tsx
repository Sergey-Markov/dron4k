import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import teamPhoto from "@images/team.png";
import Button from "@components/Button/Button";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";
import { CONSTANTS } from "@utils/constants";

import s from "./Team.module.css";

export const metadata: Metadata = {
  title: "Команда фахівців",
  description:
    "Команда інструкторів та інженерів БПЛА Dron4k: практичний досвід польотів DJI, невеликі групи, персональна увага кожному курсанту.",
};

const {
  teamPageTitle,
  teamPageIntro,
  teamPageBody,
  buttonInterestTitle,
  companyEmail,
} = CONSTANTS;

function Team() {
  return (
    <main className={s.main}>
      <div className={s.imageBox}>
        <Image
          className="kenburns-top"
          src={teamPhoto}
          placeholder="blur"
          alt="Команда школи Dron4k"
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <ScrollReveal className={s.content}>
        <span className={s.index}>01/TEAM</span>
        <h1 className={s.title}>{teamPageTitle}</h1>
        <p className={s.text}>{teamPageIntro}</p>
        <p className={s.text}>{teamPageBody}</p>
        <div className={s.button}>
          <Button
            title={buttonInterestTitle}
            variant="laser"
            href={`mailto:${companyEmail}?subject=${encodeURIComponent("Питання про команду Dron4k")}`}
          />
        </div>
      </ScrollReveal>
    </main>
  );
}

export default Team;
