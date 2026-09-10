import React from "react";
import Image from "next/image";
import { withBasePath } from "@utils/basePath";

import s from "./ZSUHelp.module.css";

function ZSUHelp() {
  return (
    <a
      className={s.logoWrapper}
      href="https://savelife.in.ua/donate/"
      target="_blank"
      rel="noreferrer"
      title="Підтримати ЗСУ (Повернись живим)"
    >
      <Image
        className={s.badge}
        src={withBasePath("/assets/images/donat_ZSU.svg")}
        width={130}
        height={90}
        alt="Підтримати ЗСУ"
        unoptimized
      />
    </a>
  );
}

export default ZSUHelp;
