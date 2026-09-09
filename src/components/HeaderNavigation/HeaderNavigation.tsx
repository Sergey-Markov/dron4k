import React from "react";
import Link from "next/link";
import Button from "@components/Button/Button";
import { CONSTANTS } from "@utils/constants";

import s from "./HeaderNavigation.module.css";

function HeaderNavigation() {
  return (
    <nav className={s.navBox}>
      {CONSTANTS.headerNavLinks.map((el, ind) => {
        const keyExt = `${el.name}-${ind}`;
        return (
          <Link
            key={keyExt}
            className={s.links}
            href={el.href}
          >
            {el.text}
          </Link>
        );
      })}
      <Button
        variant="laser"
        title="Цікавить"
        href={`mailto:${CONSTANTS.companyEmail}?subject=${encodeURIComponent("Загальне питання Dron4k")}`}
      />
    </nav>
  );
}

export default HeaderNavigation;
