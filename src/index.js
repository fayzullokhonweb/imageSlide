// index.js
import React from "react";
import ReactDOM from "react-dom";
import ImageSlider from "./App";

const images = [
  "./assets/img.jpg",
  "./assets/img2.jpg",
  "./assets/img3.jpg",
  "./assets/img4.jpg",
];

ReactDOM.render(
  <React.StrictMode>
    <ImageSlider images={images} />
  </React.StrictMode>,
  document.getElementById("root")
);
