import React from "react";
import { Card } from "./Card";
import { LoginSignupBtn } from "./LoginSignupBtn";

/**
 * @author
 * @function HomeContainer
 **/

export const HomeContainer = (props) => {
  return (
    <div className="p-4">
      <LoginSignupBtn />
      <p className="text-5xl text-left first-letter:capitalize mb-5">Recipes</p>
      <p className="text-lg text-left first-letter:capitalize font-mono p-1 text-gray-500 tracking-wider">
        for Ninjas
      </p>
      <p className="text-left mt-10 text-sm font-semibold p-1 first-letter:capitalize text-gray-600 tracking-wider">
        latest Recipes
      </p>
      <div className="grid grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
      </div>
      <p className="text-left mt-10 text-sm font-semibold p-1 first-letter:capitalize text-gray-600 tracking-wider">
        most Popular
      </p>
      <div className="grid grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center">
        <span className="btn-fill w-max">load more</span>
      </div>
    </div>
  );
};
