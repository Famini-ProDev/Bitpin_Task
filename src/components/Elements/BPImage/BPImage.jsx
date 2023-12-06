import React from "react";
import ImageNotFound from "./ImageNotFound";

const BPImage = ({ src, alt, img, ...props }) => {
  return src && img !== null ? (
    <img src={src} alt={alt} {...props} />
  ) : (
    <ImageNotFound />
  );
};

export default BPImage;
