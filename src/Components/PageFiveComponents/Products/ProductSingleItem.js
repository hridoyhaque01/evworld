import React, { useState } from "react";

function ProductSingleItem({ image, title }) {
  const [isRotate, setisRotate] = useState(false);

  const handleRotate = () => {
    setisRotate((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-12">
      <div
        className="flex justify-center item-center group peer relative "
        onMouseEnter={handleRotate}
        onMouseLeave={handleRotate}
      >
        <div
          className=" shadow-md flex justify-center items-center origin-top bg-pureWhite group-hover:bg-primaryColor duration-300  absolute top-0 left-0 h-full w-full"
          style={{
            transform: `perspective(600px) ${
              isRotate ? " rotateY(-160deg)" : "rotateY(-25deg)"
            }`,
          }}
        ></div>
        <img
          src={image}
          alt=""
          className="py-14 px-8 transform group-hover:scale-x-[-1] duration-300"
        />
      </div>
      <p className="text-center text-2xl font-bold text-pureWhite capitalize peer-hover:text-primaryColor">
        {title}
      </p>
    </div>
  );
}

export default ProductSingleItem;
