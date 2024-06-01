import React from "react";
import Creatorimg from '../../Images/team13.jpg'
import Creatorimg1 from '../../Images/team16.jpg'
import Creatorimg2 from '../../Images/team18.jpg'


export default function CreativePeople() {
  return (
    <div>
      <div>
        <h5 className="text-extra-dark-gray mt-16 font-bold text-3xl ">
          CREATIVE PEOPLE{" "}
        </h5>
        <p className="w-90 mx-auto sm-w-100 sm-no-margin-bottom text-[#6f6f6f] mt-3 mb-16">
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br />
          industry. It has survived not only five centuries, but also the leap{" "}
          <br />
          into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>

      <div className="relative flex w-[80%] ml-32 mb-24 mt-0 items-center gap-8 justify-center ">
        <div>
          <img src={Creatorimg} alt="" />
          <h3 className="font-semibold text-sm mt-4">HUGH MACLEOD</h3>
          <span className="text-xs mt-3">CREATIVE DIRECTOR</span>
        </div>
        <div>
          <img src={Creatorimg1} alt="" />
          <h3 className="font-semibold text-sm mt-4">JEREMY DUPONT</h3>
          <span className="text-xs mt-3">CREATIVE DIRECTOR</span>
        </div>
        <div>
          <img src={Creatorimg2} alt="" />
          <h3 className="font-semibold text-sm mt-4">SARA SMITH</h3>
          <span className="text-xs mt-3">CREATIVE STUDIO HEAD</span>
        </div>
        <div>
          <img src={Creatorimg} alt="" />
          <h3 className="font-semibold text-sm mt-4">BILL GARDNER</h3>
          <span className="text-xs mt-3">CO-FOUNDER/DESIGN</span>
        </div>
      </div>
    </div>
  );
}
