import React from "react";
import logo from "../../Images/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="flex justify-between text-black font-bold text-lg pl-4 pr-4" >
      <div className="p-4">
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-10 p-4 ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 p-4">
          <IoSearchOutline />
          <FaFacebookF />
          <FaTwitter />
          <FaDribbble />
        </div>
    </div>
  );
}
