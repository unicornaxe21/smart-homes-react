import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


function Propertyslide() {
    
    const images = [
        {
          original: "https://studentdemo.fluttertrends.com/images/house-01.png",
          thumbnail: "https://studentdemo.fluttertrends.com/images/house-01.png",
        },
        {
          original: "https://studentdemo.fluttertrends.com/images/house-02.png",
          thumbnail: "https://studentdemo.fluttertrends.com/images/house-02.png",
        },
        {
          original: "https://studentdemo.fluttertrends.com/images/house-03.png",
          thumbnail: "https://studentdemo.fluttertrends.com/images/house-03.png",
        },
        {
            original: "https://studentdemo.fluttertrends.com/images/house-04.png",
            thumbnail: "https://studentdemo.fluttertrends.com/images/house-04.png",
          },
      ];
  return (
    
    <>
    return <ImageGallery items={images}  />;
    </>
  )
}

export default Propertyslide