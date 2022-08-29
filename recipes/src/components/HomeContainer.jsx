import React from "react";
import { Card } from "./Card";
import { LoginSignupBtn } from "./LoginSignupBtn";

/**
 * @author
 * @function HomeContainer
 **/

export const HomeContainer = (props) => {
  return (
    <div className=" ">
      <LoginSignupBtn />
      <div className="grid grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
