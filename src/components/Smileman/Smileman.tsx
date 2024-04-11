/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { BsFillEmojiSmileFill, BsFillEmojiWinkFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";

import s from "./Smileman.module.css";

const Smileman = () => (
  <div className={s.box}>
    <div className={s.smile}>
      <BsFillEmojiSmileFill className="h-full w-full" />
    </div>
    <div className={s.smileSec}>
      <BsFillEmojiWinkFill className="h-full w-full" />
    </div>
    <button
      type="button"
      className=" z-10 text-white absolute hover:text-red-500"
    >
      <FaPowerOff size={60} />
    </button>
    <div className="flex items-center justify-center">
      <div className={s.constructTitle}>
        <button
          type="button"
          className={s.text}
        >
          Констроювання
          <br /> дрону
        </button>
      </div>
      <div className={s.operatorTitle}>
        <button
          type="button"
          className={s.text}
        >
          Оператор БПЛА
          <br />
          (FPV) дрону
        </button>
      </div>
    </div>
  </div>
);

export default Smileman;
