import React from "react";
import Image from "next/image";
import heroBg from "@images/store_bg.png";

import s from "./Store.module.css";

function Store() {
  return (
    <section id="store">
      <Image
        className="kenburns-top"
        src={heroBg}
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
    </section>
  );
}

export default Store;
