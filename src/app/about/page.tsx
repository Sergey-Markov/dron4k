import React from "react";
import Image from "next/image";
import dronOperator from "@images/dron_operator.png";
import drone3D from "@images/drone_3D.png";
import home from "@images/home.png";
import fpvDronOperator from "@images/FPV_dron_operator.png";
import team from "@images/team.png";
import page from "@images/web_page.png";

import s from "./About.module.css";

function About() {
  return (
    <section>
      <div className={s.parent}>
        {/* <Image
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
        /> */}
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
          <h2 className={s.title}>Про нас</h2>
          <p className={s.text}>
            ми піднімаємо світ за допомогою передової технології дронів DJI.
            Наша пристрасть до польотів і інновацій підноситься за горизонт,
            втілюючи захопливі перспективи, які колись були мрією. Ми віримо в
            майбутнє мирне блакитне, як прапор небо, яке стає майданчиком для
            творчості, дослідження та відкриття. Наша місія: забезпечити Вас
            остаточним досвідом оператора дрону. Незалежно від того, чи ви
            військовий, фотограф чи ентузіаст кіно, який шукає нові висоти, наші
            дрони DJI - ваші крила.
          </p>
        </div>
        <div className={s.gridBox5}>
          <h2 className={s.title}>Наше бачення:</h2>
          <div>
            <p className={s.text}>
              “Використовувати безмежне небо і наблизити вас до хмар, а Україну
              до перемоги!
            </p>
            <p className={s.text}>
              Долучайтеся до нашої команди та опануйте мистецтво управління
              дроном вже сьогодні!”
            </p>
          </div>
          <button
            type="button"
            className={s.button}
          >
            Цікавить
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
              // zIndex: -2,
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
              // zIndex: -2,
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
              // zIndex: -2,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
