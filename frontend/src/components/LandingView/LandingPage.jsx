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
          <Link to="/auth/register">
            <Button variant="secondary" size="sm">
              Register
            </Button>
          </Link>

          <Link to="/auth/login">
            <Button className="mx-2" size="sm">
              Log In
            </Button>
          </Link>
        </div>
      </nav>

      <section className="text-6xl text-[#334155] my-20 mx-auto font-extrabold max-w-[70%] text-center">
        The All-in-One PaaS ecosystem to{" "}
        <span className="text-[#3474EF]">
          <u>streamline construction</u>
        </span>
      </section>

    
      <CopyPaste1 />


        {/* Feature Section */}
        <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Plug-and-Play Dashboard
              </h3>
              <p className="text-gray-600">
                Our platform offers a plug-and-play dashboard solution, making it easy to set up and customize according to your needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Highly Scalable
              </h3>
              <p className="text-gray-600">
                BricBoard is highly scalable, allowing you to adapt and grow your construction projects without limitations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Editable & Customizable
              </h3>
              <p className="text-gray-600">
                You can easily edit and customize our platform to match your construction project's unique requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
