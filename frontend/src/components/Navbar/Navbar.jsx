import React from "react";
// import { HiOutlineBell, HiOutlineUserCircle } from "react-icons/hi";
import {BsFillPersonFill} from "react-icons/bs";
import {AiOutlineBell} from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="w-[100%] px-[3%] py-[2%] flex justify-between items-center bg-slate-200 h-[50px] drop-shadow-md sticky top-0 z-50">
      <div className="logo text-3xl font-light">
        <Link to="/">BricBoard</Link>
      </div>
      <div className="flex items-center justify-evenly gap-10">
        {/* <div id="navLinks">
          <a className="mx-3 hover:text-[#4E80EE]" href="">
            Link1
          </a>
          <a className="mx-3 hover:text-[#4E80EE]" href="">
            Link2
          </a>
          <a className="mx-3 hover:text-[#4E80EE]" href="">
            Link3
          </a>
        </div> */}
        <div className="flex gap-6 text-3xl 	">
          <a href="">
            {" "}
            <AiOutlineBell className="hover:scale-125 hover:text-[#4E80EE]" />
          </a>
          <a href="">
            <BsFillPersonFill className="hover:scale-125 hover:text-[#4E80EE]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
