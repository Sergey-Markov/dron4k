import React from "react";
import Link from "next/link";

import s from "./HeaderNavigation.module.css";

const HeaderNavigation = () => {
  return (
    <nav>
      <Link
        href={"/courses"}
        title="Курс навчання"
      ></Link>
      <Link
        href={"/about"}
        title="Про наС"
      />
      <Link
        href={"/sell"}
        title="Продаж дроніВ"
      />
    </nav>
  );
};

export default HeaderNavigation;
