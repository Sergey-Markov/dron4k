"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import classNames from "classnames";
import LogoLoader from "@components/LogoLoader/LogoLoader";

import s from "./ImageWithLoader.module.css";

const ImageWithLoader = ({ onLoad, ...props }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          if (onLoad) onLoad(e);
        }}
      />
      <div className={classNames(s.overlay, loaded && s.hidden)}>
        <LogoLoader size="sm" />
      </div>
    </>
  );
};

export default ImageWithLoader;
