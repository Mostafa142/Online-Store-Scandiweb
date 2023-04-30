import React, { useState } from "react";

import leftArrow from "../../assets/images/leftArrow.svg";
import rightArrow from "../../assets/images/rightArrow.svg";

interface Props {
  gallery: string[];
}
const ImageGallery: React.FC<Props> = ({ gallery }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const showImg = gallery[currentImage];

  const swapNextImage = () => {
    if (currentImage >= gallery.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const swapPrevImage = () => {
    if (currentImage <= 0) {
      setCurrentImage(gallery.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };
  return (
    <div className="relative">
      <img src={showImg} alt={showImg} className="h-64 w-[200px]" />

      <div className="flex gap-3 absolute bottom-4 right-4">
        <img
          src={leftArrow}
          alt="leftArrow"
          className="cursor-pointer"
          onClick={swapPrevImage}
        />
        <img
          src={rightArrow}
          alt="rightArrow"
          className="cursor-pointer"
          onClick={swapNextImage}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
