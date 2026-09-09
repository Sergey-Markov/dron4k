"use client";

import React, { useState } from "react";
import { CONSTANTS } from "@utils/constants";

import s from "./ContactPill.module.css";

function ContactPill() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent("Питання з сайту Dron4k");
    const body = encodeURIComponent(message || "Хочу дізнатись більше про Dron4k");
    window.location.href = `mailto:${CONSTANTS.companyEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className={s.pill}
      onSubmit={handleSubmit}
    >
      <input
        className={s.input}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="ВАШЕ ПИТАННЯ АБО EMAIL"
        aria-label="Ваше питання"
      />
      <button
        type="submit"
        className={s.submit}
      >
        Дізнатись більше
      </button>
    </form>
  );
}

export default ContactPill;
