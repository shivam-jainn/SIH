import React from "react";
import { HiOutlineBell, HiOutlineUserCircle } from "react-icons/hi";

const NavBar = (props) => {
  return (
    <div className="w-[100%] px-[3%] flex justify-between items-center bg-slate-200 h-[50px] drop-shadow-md sticky top-0">
      <div className="logo text-3xl font-light">
        <a href="#">BricBoard</a>
      </div>
      <div className="flex items-center justify-evenly gap-10">
        <div id="navLinks">
          <a className="mx-3 hover:text-[#4E80EE]" href="">
            Link1
          </a>
          <a className="mx-3 hover:text-[#4E80EE]" href="">
            Link2
          </a>
          <a className="mx-3 hover:text-[#4E80EE]" href="">
            Link3
          </a>
        </div>
        <div className="flex gap-6 text-3xl 	">
          <a href="">
            {" "}
            <HiOutlineBell className="hover:scale-125 hover:text-[#4E80EE]" />
          </a>
          <a href="">
            <HiOutlineUserCircle className="hover:scale-125 hover:text-[#4E80EE]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
