/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */

"use client";

import React from "react";
import classNames from "classnames";
import Link from "next/link";

import s from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "laser" | "ghost-glass";
  title: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ type = "button", variant = "laser", title, href, onClick }: ButtonProps) => {
  const btnClass = classNames([
    s.btn,
    variant === "laser" && s.laser,
    variant === "ghost-glass" && s.ghostGlass,
  ]);

  const content = (
    <>
      <span className={s.sweep} />
      <span className="relative z-10">{title}</span>
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link
          href={href}
          className={btnClass}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={btnClass}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
