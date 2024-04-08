"use client";
import React from "react";
import s from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  title: string;
  onClick: () => void;
}

const Button = ({ type = "button", variant, title, onClick }: ButtonProps) => {
  const btnClass = classNames([
    s.btn,
    variant === "primary" && s.primary,
    variant === "secondary" && s.secondary,
  ]);

  return (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
