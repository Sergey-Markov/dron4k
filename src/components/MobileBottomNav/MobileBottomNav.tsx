"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import {
  FaHome, FaInfoCircle, FaGraduationCap, FaStore,
} from "react-icons/fa";
import { CONSTANTS } from "@utils/constants";

import s from "./MobileBottomNav.module.css";

const iconByName: Record<string, React.ElementType> = {
  home: FaHome,
  about: FaInfoCircle,
  courses: FaGraduationCap,
  sell: FaStore,
};

const navItems = [{ href: "/", name: "home", text: "Головна" }, ...CONSTANTS.headerNavLinks];

function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className={s.nav}
      aria-label="Мобільна навігація"
    >
      {navItems.map((item) => {
        const Icon = iconByName[item.name] ?? FaHome;
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(s.item, isActive && s.active)}
            aria-label={item.text}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </nav>
  );
}

export default MobileBottomNav;
