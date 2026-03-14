"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface FallbackImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
}

const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  fallbackSrc = "/placeholder.jpg",
  alt,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt || "Image"}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default FallbackImage;