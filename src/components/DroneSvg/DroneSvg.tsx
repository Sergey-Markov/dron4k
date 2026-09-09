import React from "react";

import s from "./DroneSvg.module.css";

function DroneSvg() {
  return (
    <svg
      className={s.svgBox}
      // width="1411"
      // height="640"
      viewBox="0 0 1411 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1411 0V640H0V0H1411Z"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_245_3751"
            transform="matrix(0.00078125 0 0 0.00172241 0 -0.120068)"
          />
        </pattern>
        <image
          id="image0_245_3751"
          width="1280"
          height="720"
          xlinkHref="/assets/images/about-pattern.png"
        />
      </defs>
    </svg>
  );
}

export default DroneSvg;
