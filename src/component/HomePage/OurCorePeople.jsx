import React from "react";
import team1 from "../../Images/team22.jpg";
import team2 from "../../Images/team23.jpg";
import team3 from "../../Images/team24.jpg";
import team4 from "../../Images/team25.jpg";

export default function OurCorePeople() {
  return (
    <div className="relative mt-[700px]">
      <h5 className="text-extra-dark-gray margin-15px-bottom font-bold text-3xl ">
        OUR CORE PEOPLE{" "}
      </h5>
      <p className="w-90 mx-auto sm-w-100 sm-no-margin-bottom text-[#6f6f6f] mt-3 mb-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting <br />
        industry. It has survived not only five centuries, but also the leap{" "}
        <br />
        into electronic typesetting, remaining essentially unchanged.
      </p>

      <div className="relative flex w-[80%] ml-32 mb-24 mt-0 items-center gap-8 justify-center ">
        <div>
          <img src={team1} alt="" />
          <h3 className="font-semibold text-sm mt-4">HUGH MACLEOD</h3>
          <span className="text-xs mt-3">CREATIVE DIRECTOR</span>
        </div>
        <div>
          <img src={team2} alt="" />
          <h3 className="font-semibold text-sm mt-4">JEREMY DUPONT</h3>
          <span className="text-xs mt-3">CREATIVE DIRECTOR</span>
        </div>
        <div>
          <img src={team3} alt="" />
          <h3 className="font-semibold text-sm mt-4">SARA SMITH</h3>
          <span className="text-xs mt-3">CREATIVE STUDIO HEAD</span>
        </div>
        <div>
          <img src={team4} alt="" />
          <h3 className="font-semibold text-sm mt-4">BILL GARDNER</h3>
          <span className="text-xs mt-3">CO-FOUNDER/DESIGN</span>
        </div>
      </div>
    </div>
  );
}
