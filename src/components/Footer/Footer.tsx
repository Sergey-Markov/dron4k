import React from "react";
import Link from "next/link";
import { CgInstagram } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CONSTANTS } from "@utils/constants";

import s from "./Footer.module.css";

const getSocIcon = (type: string) => {
  switch (type) {
    case "instagram":
      return <CgInstagram size={20} />;
    case "telegram":
      return <FaTelegramPlane size={20} />;
    case "facebook":
      return <AiOutlineFacebook size={20} />;

    default:
      return "404";
  }
};

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.blurBox} />
      <div className={s.linksWrapper}>
        <Link
          className="hovered"
          href="/team"
        >
          Команда фахівців
        </Link>

        <ul className={s.linksList}>
          {CONSTANTS.companyInSocial.map((el) => {
            const typeOfEl = el.type;
            return (
              <li
                className="hovered"
                key={`${typeOfEl}-icon`}
              >
                <a
                  href={el.href}
                  title={el.title}
                >
                  {getSocIcon(typeOfEl)}
                </a>
              </li>
            );
          })}
        </ul>

        <Link
          className="hovered"
          href="/policy"
        >
          Політика конфіденційності
        </Link>
      </div>
      <p className=" text-center text-gray-400">
        © 2024 Усі права захищено - розроблено
        <span className="hovered ml-2">
          <a href="https://sergey-markov.github.io/My-CV/">QttR</a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
