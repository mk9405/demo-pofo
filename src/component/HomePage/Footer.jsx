import React from "react";
import logo from "../../Images/logo-white.png";

export default function Footer() {
  return (
    <div className="bg-[#1c1c1c] p-24 ">
      <div className="flex justify-between ">
        <div className="text-[#6f6f6f] text-2xl">
          <h1>London Based</h1>
          <h1>Creative Studio</h1>
        </div>
        <div className="text-[#6f6f6f] text-left text-base">
          <h1>301 The Greenhouse,</h1>
          <h1>Custard Factory, London, E2 8DY</h1>
          <h1>sales@domain.com | +44(0) 123 456 7890</h1>
        </div>
        <div className="text-[#6f6f6f]">
          <img src={logo} alt="" />
          <div className=" text-xs mt-4">
            <a href="/">TWITTER</a>
            <a className="ml-4" href="/">
              FACEBOOK
            </a>
            <a className="ml-4" href="/">
              INSTAGRAM
            </a>
            <a className="ml-4" href="/">
              DRIBBLE
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-[#6f6f6f] mt-16">
        <div>
            <a href="/">POFO Portfolio Concept Theme</a>
        </div>
        <div>
            <a href="/">© 2024 POFO is Proudly Powered by ThemeZaa.</a>
        </div>
      </div>
    </div>
  );
}
