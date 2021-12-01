import React from "react";

const Image = ({ image }) => {
  return <img className="single-photo" src={image.url} alt="" />;
};

export default Image;
