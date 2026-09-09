import React from "react";
import Link from "next/link";
import { CgInstagram } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CONSTANTS } from "@utils/constants";
import ZSUHelp from "@components/ZSUHelp/ZSUHelp";

import s from "./Footer.module.css";

// eslint-disable-next-line object-curly-newline, operator-linebreak
const { teamLink, policyLink, allRightsReserved, devName, companyInSocial, companyContacts } =
  CONSTANTS;

const getSocIcon = (type: string) => {
  switch (type) {
    case "instagram":
      return <CgInstagram size={18} />;
    case "telegram":
      return <FaTelegramPlane size={18} />;
    case "facebook":
      return <AiOutlineFacebook size={18} />;

    default:
      return "404";
  }
};

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <ul className={s.contacts}>
          {companyContacts.map((el, ind) => {
            const keyExt = `${el.type}-${ind}`;
            return (
              <li key={keyExt}>
                <a
                  className={s.contactLink}
                  type={el.type}
                  href={el.href}
                  title={el.title}
                  referrerPolicy="no-referrer"
                >
                  {el.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ZSUHelp />
      </div>

      <div className={s.linksWrapper}>
        <Link
          className={s.footerLink}
          href="/team"
        >
          {teamLink}
        </Link>

        <ul className={s.linksList}>
          {companyInSocial.map((el) => {
            const typeOfEl = el.type;
            return (
              <li
                className={s.footerLink}
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
          className={s.footerLink}
          href="/policy"
        >
          {policyLink}
        </Link>
      </div>
      <p className={s.copy}>
        {allRightsReserved}
        <span className={`${s.footerLink} ml-2`}>
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
