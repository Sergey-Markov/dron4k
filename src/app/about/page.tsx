import React from "react";
import Image from "next/image";
import DroneSvg from "@components/DroneSvg/DroneSvg";
import dronOperator from "@images/dron_operator.png";
import drone3D from "@images/drone_3D.png";
import home from "@images/home.png";
import fpvDronOperator from "@images/FPV_dron_operator.png";
import team from "@images/team.png";
import page from "@images/web_page.png";
import { CONSTANTS } from "@utils/constants";

import s from "./About.module.css";

const {
  aboutTitle,
  aboutText,
  teamVisionTitle,
  teamVisionTextUp,
  teamVisionTextDown,
  buttonInterestTitle,
} = CONSTANTS;

function About() {
  return (
    <section className={s.hero}>
      <div className={s.svgBox}>
        <DroneSvg />
      </div>
      <div className={s.parent}>
        <div className={s.gridBox1}>
          <Image
            className="kenburns-top"
            src={dronOperator}
            placeholder="blur"
            quality={100}
            alt=" FVP дрон"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              filter: "grayscale(100%) ",
              // zIndex: -2,
            }}
          />
        </div>
        <div className={s.gridBox2}>
          <Image
            className="kenburns-top"
            src={drone3D}
            placeholder="blur"
            quality={100}
            alt=" FVP дрон"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              // zIndex: -2,
            }}
          />
        </div>
        <div className={s.gridBox3}>
          <Image
            className="kenburns-top"
            src={home}
            placeholder="blur"
            quality={100}
            alt=" FVP дрон"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              // zIndex: -2,
            }}
          />
        </div>
        <div className={s.gridBox4}>
          <h2 className={s.title}>{aboutTitle}</h2>
          <p className={s.text}>{aboutText}</p>
        </div>
        <div className={s.gridBox5}>
          <h2 className={s.title}>{teamVisionTitle}</h2>
          <div>
            <p className={s.text}>{teamVisionTextUp}</p>
            <p className={s.text}>{teamVisionTextDown}</p>
          </div>
          <button
            type="button"
            className={s.button}
          >
            {buttonInterestTitle}
          </button>
        </div>
        <div className={s.gridBox6}>
          <Image
            className="kenburns-top"
            src={fpvDronOperator}
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
        <div className={s.gridBox7}>
          <Image
            className="kenburns-top"
            src={team}
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
        <div className={s.gridBox8}>
          <Image
            className="kenburns-top"
            src={page}
            placeholder="blur"
            quality={100}
            alt=" FVP дрон"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              filter: "grayscale(100%) ",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
