// include Art, poem, photographs
import React, {Component} from "react";
import ImageOne from "./ImageOne";
import ImageThree from "./ImageThree";
import ImageTwo from "./ImageTwo";
import TextBox from "./TextBox";
import './images.css';


const Art = () => {
  return (
    <div className="mainBody">
        <ImageOne/>
        <ImageTwo/>
        <ImageThree/>
        <TextBox/>
    </div>
  )
}

export default Art
