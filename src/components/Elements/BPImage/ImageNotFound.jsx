import React from "react";
import { FiImage } from "react-icons/fi";

function ImageNotFound() {
  return (
    <div
      className="flex items-center justify-center text-gray-500 text-3xl"
      role="img"
    >
      <FiImage />
    </div>
  );
}

export default ImageNotFound;
