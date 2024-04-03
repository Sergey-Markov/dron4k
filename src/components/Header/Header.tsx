import React from "react";

import Logo from "@components/Logo/Logo";
import HeaderNavigation from "@components/HeaderNavigation/HeaderNavigation";

import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.headerBox}>
      <div className={s.blurBox} />
      <div className={s.headerWrapper}>
        <div className=" animate-slide-right">
          <Logo size={90} />
        </div>
        <HeaderNavigation />
      </div>
    </header>
  );
}

export default Header;
