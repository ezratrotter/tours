import * as React from "react";
import Tour from "./Tour";
import { TourType } from "./API";

interface ToursProps {
  tours: Array<TourType>;
}

const Tours: React.FC<ToursProps> = ({ tours }) => {
  return (
    <>
      {tours.map((tour: TourType) => {
        const { id, name, info, image, price } = tour;
        return (
          <Tour id={id} name={name} info={info} image={image} price={price} />
        );
      })}
    </>
  );
};

export default Tours;
