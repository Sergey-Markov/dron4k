import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import droneHome from "@images/home.png";
import dronOperator from "@images/dron_operator.png";
import fpvDronOperator from "@images/FPV_dron_operator.png";
import operatorPhoto from "@images/operator.png";
import teamPhoto from "@images/team.png";
import Button from "@components/Button/Button";
import LuminosityCard from "@components/ui/luminosity-card";
import AvatarStack from "@components/ui/avatar-stack";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";
import ContactPill from "@components/ContactPill/ContactPill";
import { CONSTANTS } from "@utils/constants";

import s from "./Home.module.css";

export const metadata: Metadata = {
  title: "Головна",
  description:
    "Dron4k — школа FPV-пілотів та інженерів БПЛА, продаж дронів DJI. Навчання з нуля, сертифікація, сучасна техніка.",
};

const avatarItems = [
  { src: dronOperator, alt: "Оператор Dron4k" },
  { src: fpvDronOperator, alt: "FPV-пілот Dron4k" },
  { src: operatorPhoto, alt: "Курсант на практиці" },
  { src: teamPhoto, alt: "Команда Dron4k" },
];

export default function Home() {
  return (
    <>
      <main className={s.hero}>
        <div className={s.glow} />
        <div className={s.tiltWrap}>
          <div className={s.tiltCard}>
            <Image
              src={droneHome}
              placeholder="blur"
              alt="FPV дрон у польоті над полем"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
              className="opacity-40"
            />
            <div className="glass absolute inset-0" />
          </div>
        </div>

        <div className={s.content}>
          <div className={s.headlineBox}>
            <h1 className={s.headline}>{CONSTANTS.companyName}</h1>
          </div>
          <p className={s.subtitle}>{CONSTANTS.homeSubtitle}</p>

          <div className={s.metaRow}>
            <span className={s.statusTag}>УКРАЇНА · НАБІР ВІДКРИТО</span>
            <div className={s.actions}>
              <Button
                title="Навчатись"
                variant="laser"
                href="/courses"
              />
              <Button
                title="Купити дрон"
                variant="ghost-glass"
                href="/store"
              />
            </div>
          </div>
        </div>
      </main>

      <ScrollReveal>
        <section className={s.bentoSection}>
          <div className={s.bentoGrid}>
            {CONSTANTS.homeBentoItems.map((item) => (
              <Link
                key={item.index}
                href={item.href}
                className="block"
              >
                <LuminosityCard>
                  <div className="flex h-full flex-col justify-between">
                    <span className="font-techmono text-xs uppercase tracking-[0.3em] text-neon">
                      {item.index}
                    </span>
                    <h3 className="mt-8 font-heading text-3xl uppercase leading-tight text-white sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-6 text-sm leading-relaxed text-white/50">{item.description}</p>
                  </div>
                </LuminosityCard>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className={s.socialSection}>
          <AvatarStack items={avatarItems} />
          <p className="font-techmono text-xs uppercase tracking-[0.3em] text-white/40">
            Курсанти та інструктори Dron4k
          </p>
          <ContactPill />
        </section>
      </ScrollReveal>
    </>
  );
}
