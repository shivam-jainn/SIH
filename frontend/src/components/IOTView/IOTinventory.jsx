import { FiUploadCloud } from "react-icons/fi";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { PiFiles } from "react-icons/pi";
import { MdOutlineDelete } from "react-icons/md";
import React from "react";
import {
  Bold,
  Button,
  Card,
  Grid,
  Metric,
  Title,
} from "@tremor/react";
import NavBar from "../Navbar/Navbar";

const IOTinventory = () => {
  return (
    <>
      <NavBar />
      <div className="m-10">
        <Metric className="my-5">Inventory</Metric>

        <Grid
          numItems={6}
          numItemsMd={3}
          className="gap-4 border p-0 md:p-6 bg-slate-50"
        >
          <Card>
            <div className="text-center">
              <Title className="text-xl font-semibold">
                Drone: QI check 01201 BA
              </Title>
              <p className="text-gray-600 mt-2">
                Road quality inspection for NHAI project using drones.
              </p>
            </div>

            <div className="flex flex-col justify-evenly mt-4">
              <Button
                icon={FiUploadCloud}
                className="my-2 transition-shadow hover:shadow-lg hover:bg-blue-100 hover:text-blue-500"
              >
                drone_script.js
              </Button>
              <Button
                icon={IoDocumentAttachOutline}
                className="my-2 transition-shadow hover:shadow-lg hover:bg-green-100 hover:text-green-500"
              >
                Attach Component
              </Button>
              <Button
                icon={PiFiles}
                className="my-2 transition-shadow hover:shadow-lg hover:bg-amber-100 hover:text-amber-500"
                color="amber"
              >
                Log files
              </Button>
              <Button
                icon={MdOutlineDelete}
                className="my-2 transition-shadow hover:shadow-lg hover:bg-red-100 hover:text-red-500"
                color="red"
              >
                Delete
              </Button>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-4xl text-blue-500 cursor-pointer transform hover:scale-105 transition-transform">
                +
              </div>
              <div className="text-center font-semibold text-gray-700">
                Add Device
              </div>
            </div>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default IOTinventory;
