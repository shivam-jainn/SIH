import { Button } from "@tremor/react";
import React from "react";
import { Link } from "react-router-dom";
import CopyPaste1 from "./CopyPaste";

const LandingPage = (props) => {
  return (
    <div className=" flex flex-col justify-center item-center">
      <nav className="flex justify-between items-center px-[5%] h-[70px] border-b border-solid border-gray-300">
        <div className="text-3xl ">BricBoard</div>
        <div>
          <Link to="/login">
            <Button variant="secondary" size="sm">
              Log In
            </Button>
          </Link>
        </div>
      </nav>

      <section className="text-6xl text-[#334155] my-20 mx-auto font-extrabold max-w-[70%] text-center">
        The All-in-One PaaS ecosystem to{" "}
        <span className="text-[#3474EF]">
          <u>optimise constructions</u>
        </span>
      </section>
      <CopyPaste1 />
    </div>
  );
};

export default LandingPage;
