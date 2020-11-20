import * as React from "react";
import { TourType } from "./API";
const Tour: React.FC<TourType> = ({ id, name, info, image, price }) => {
  return (
    <>
      <h4>{id}</h4>
      <h4>{name}</h4>
      <p>{info}</p>
      <img src={image} alt={name} />
      <h4>{price}</h4>
    </>
  );
};

export default Tour;
