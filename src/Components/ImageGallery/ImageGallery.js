import React from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = () => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
