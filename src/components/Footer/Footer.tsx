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
    <footer className=" w-full h-fit py-5 fixed bottom-0 text-base text-gray-400 flex flex-col items-center animate-slide-top">
      <div className={s.blurBox} />
      <div className=" flex flex-row items-center gap-8 pt-3 ">
        <Link
          className="hover:text-red-500 transition-all duration-300"
          href="/team"
        >
          Команда фахівців
        </Link>

        <ul className=" flex flex-row gap-2  border-l-2 border-r-2 px-8">
          {CONSTANTS.companyInSocial.map((el) => {
            const typeOfEl = el.type;
            return (
              <li
                className="hover:text-red-500 transition-all duration-300"
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
          className="hover:text-red-500 transition-all duration-300"
          href="/policy"
        >
          Політика конфіденційності
        </Link>
      </div>
      <p className=" text-center text-gray-400">
        © 2024 Усі права захищено - розроблено
        <span className=" ml-2 hover:text-red-500 transition-all duration-300">
          <a href="https://sergey-markov.github.io/My-CV/">QttR</a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
