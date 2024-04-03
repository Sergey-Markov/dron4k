import React from "react";

import s from "./Header.module.css";
import Logo from "@components/Logo/Logo";
import HeaderNavigation from "@components/HeaderNavigation/HeaderNavigation";

const Header = () => {
  return (
    <header className={s.headerBox}>
      <div className={s.blurBox} />
      <div className={s.headerWrapper}>
        <Logo
          color={"white"}
          size={90}
        />
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
