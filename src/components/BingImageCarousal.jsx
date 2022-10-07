import React from "react";
import { Carousel } from "primereact/carousel";

const BingImageCarousal = () => {
  const itemTemplate = (product) => {
    return <h1>Hello</h1>;
  };
  return (
    <div>
      <Carousel
        value={[]}
        itemTemplate={itemTemplate}
        numVisible={3}
        numScroll={1}
      ></Carousel>
    </div>
  );
};

export default BingImageCarousal;
