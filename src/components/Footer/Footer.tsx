import React from "react";
import Link from "next/link";
import { CgInstagram } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CONSTANTS } from "@utils/constants";

import s from "./Footer.module.css";

// eslint-disable-next-line object-curly-newline, operator-linebreak
const { teamLink, policyLink, allRightsReserved, devName, companyInSocial } =
  CONSTANTS;

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
          {teamLink}
        </Link>

        <ul className={s.linksList}>
          {companyInSocial.map((el) => {
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
          {policyLink}
        </Link>
      </div>
      <p className=" text-center text-gray-400">
        {allRightsReserved}
        <span className="hovered ml-2">
          <a
            href="https://sergey-markov.github.io/My-CV/"
            lang="en"
          >
            {devName}
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
