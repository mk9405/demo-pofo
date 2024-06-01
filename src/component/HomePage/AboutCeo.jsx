import React from "react";
import Ceoimg from "../../Images/about-ceo2.jpg";
import Sign from "../../Images/signature-dark.png"

export default function AboutCeo() {
  return (
    <div className="flex flex-row gap-10 bg-[#f7f7f7] ">
      <div className="w-[500px]  ml-[70px]">
        <img src={Ceoimg} alt="" />
      </div>
      <div className="w-[500px] h-[600px] mr-[70px] text-left ml-20">
        <h1 className="font-bold text-3xl mt-20">
          DESIGN IS NOT JUST <br /> WHAT IT LOOKS LIKE <br /> AND FEELS LIKE.
          DESIGN <br /> IS HOW IT WORKS.
        </h1>
        <p className=" mt-5 text-[#6f6f6f]">
          Pofo philosophy that great design can only be <br/>delivered by people with
          a deep social and cultural<br/> understanding of the communities they
          designing.<br/> Lorem Ipsum is simply dummy text of the printing<br/> and
          typesetting industry. Lorem Ipsum has been the <br/>industry's standard
          dummy text ever...
        </p>
        <img className="mt-5 " src={Sign} alt="" />
        <h3 className="mt-5 font-bold ">Colin Smith</h3>
        <p className="mt-5 text-[#6f6f6f]">From the chairman's desk</p>
      </div>
    </div>
  );
}
