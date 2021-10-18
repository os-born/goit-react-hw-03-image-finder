import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGalleryList.module.css";

const ImageGalleryList = ({ pics, modalImage }) => {
  return (
    <ul className={s.ImageGalleryList}>
      {pics.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            alt={tags}
            onClick={() => {
              modalImage(largeImageURL);
            }}
          />
        );
      })}
    </ul>
  );
};

export default ImageGalleryList;
