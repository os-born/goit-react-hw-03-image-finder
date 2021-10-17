import React from "react";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = () => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src="" alt="" className={s.ImageGalleryItem__image} />
    </li>
  );
};

export default ImageGalleryItem;
