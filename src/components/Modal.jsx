import React from "react";
import styles from "./Modal.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Modal({ images, setImages }) {
  return (
    <div className={styles.modal}>
      <button
        className={styles.button}
        onClick={() => {
          setImages([]);
        }}
      >
        X
      </button>
      <div className={styles.content}>
        <ImageGallery items={images} />
      </div>
    </div>
  );
}
