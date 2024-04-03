import React from "react";
import Link from "next/link";

import { CONSTANTS } from "@utils/constnts";

import s from "./HeaderNavigation.module.css";

function HeaderNavigation() {
  return (
    <nav className={s.navBox}>
      {CONSTANTS.headerNavLinks.map((el, ind) => {
        const keyExt = `${el.name}-${ind}`;

        return (
          <Link
            key={keyExt}
            href={el.href}
          >
            {el.text}
          </Link>
        );
      })}
      <ul>
        {CONSTANTS.companyContacts.map((el, ind) => {
          const keyExt = `${el.type}-${ind}`;
          return (
            <li key={keyExt}>
              <a
                type={el.type}
                href={el.href}
                title="Лучшее место для поиска дополнительной информации
           о миссии Mozilla и о том, как внести свой вклад"
              >
                {el.href}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
