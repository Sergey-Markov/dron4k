import React from "react";
import Link from "next/link";
import ZSUHelp from "@components/ZSUHelp/ZSUHelp";
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
      <ul>
        {CONSTANTS.companyContacts.map((el, ind) => {
          const keyExt = `${el.type}-${ind}`;
          return (
            <li key={keyExt}>
              <a
                className={s.links}
                type={el.type}
                href={el.href}
                title={el.title}
                referrerPolicy="no-referrer"
              >
                {el.text}
              </a>
            </li>
          );
        })}
      </ul>
      <div className=" animate-slide-left">
        <ZSUHelp />
      </div>
    </nav>
  );
}

export default HeaderNavigation;
