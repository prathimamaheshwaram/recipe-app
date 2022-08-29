import React from "react";
import img1 from "../images/food2.jpeg";
/**
 * @author
 * @function Card
 **/

// const data = [
//   {
//     id: 1,
//     img: img1,
//     title: "Como Beanuoes!",
//     author: "Mark",
//   },
// ];
export const Card = (props) => {
  return (
    <div className="grid grid-rows-3 h-4/5 w-72 items-center relative overflow-hidden m-3 shadow-sm border-2 border-opacity-20 rounded-md border-primary-200 bg-white transition ease-linear duration-300 hover:shadow-lg hover:shadow-primary-300">
      <div className="row-span-2">
        <img
          src={img1}
          className="object-cover w-screen opacity-80"
          alt="img1"
        />
        <span className="absolute spanButton top-2 left-2">25 mins</span>
      </div>
      <div className="p-3 row-span-1">
        <p className="text-md font-normal tracking-wider">Como Beanuoes!</p>
        <p className="text-xs font-extralight tracking-widest">
          Recipe By Mark walker
        </p>
      </div>
    </div>
  );
};
