import React from "react";
import classNames from "classnames";
import Logo from "@components/Logo/Logo";

import s from "./LogoLoader.module.css";

interface LogoLoaderProps {
  size?: "sm" | "lg";
  fullScreen?: boolean;
  label?: string;
}

const LogoLoader = ({ size = "lg", fullScreen = false, label }: LogoLoaderProps) => (
  <div className={classNames(s.wrapper, fullScreen && s.fullScreen)}>
    <div className={classNames(s.ring, size === "sm" && s.ringSm)}>
      <div className={s.mark}>
        <Logo
          size={size === "sm" ? 20 : 48}
          showText={false}
        />
      </div>
    </div>
    {label && <span className={s.label}>{label}</span>}
  </div>
);

export default LogoLoader;
