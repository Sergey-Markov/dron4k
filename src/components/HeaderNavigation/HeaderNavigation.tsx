import React from "react";
import Link from "next/link";

import s from "./HeaderNavigation.module.css";
import { _CONSTANTS } from "@utils/constnts";

const HeaderNavigation = () => {
  return (
    <nav className=" flex gap-2">
      {_CONSTANTS.headerNavLinks.map((el, index) => {
        return (
          <Link
            key={index}
            href={el.href}
          >
            {el.text}
          </Link>
        );
      })}
      <ul>
        {_CONSTANTS.companyContacts.map((el, ind) => {
          return (
            <li key={ind}>
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
};

export default HeaderNavigation;
