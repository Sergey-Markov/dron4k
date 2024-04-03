import React from "react";

import s from "./Header.module.css";
import Logo from "@components/Logo/Logo";
import HeaderNavigation from "@components/HeaderNavigation/HeaderNavigation";

const Header = () => {
  return (
    <header className=" flex flex-row items-center w-full">
      <Logo
        color={"white"}
        size={90}
      />
      <HeaderNavigation />
      <p>headr</p>
    </header>
  );
};

export default Header;
