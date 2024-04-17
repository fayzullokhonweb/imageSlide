import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center", flexDirection: "column", gap: 8 }}>
      <img
        src={images[currentImageIndex]}
        alt={`Images`}
        style={{ display: "block", width: 400, marginBottom: 20, height: 450 }}
      />
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={goToPreviousImage}>Back</button>
        <button onClick={goToNextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
