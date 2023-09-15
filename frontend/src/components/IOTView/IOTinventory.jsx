import { RefreshIcon } from "@heroicons/react/outline";
import {
  Bold,
  Button,
  Card,
  Grid,
  Metric,
  Select,
  SelectItem,
  Subtitle,
  Title,
} from "@tremor/react";
import React from "react";
import NavBar from "../Navbar/Navbar";

const IOTinventory = () => {
  return (
    <>
      <NavBar />
      <div className=" m-10">
        <Metric className="my-5">Inventory</Metric>

        <Grid
          numItems={6}
          numItemsMd={3}
          className="gap-4 border   p-0 md:p-6 bg-slate-50"
        >
          <Card>
            <div>
              <Title>
                <Bold>Drone : QI check 01201 BA</Bold>{" "}
              </Title>
              <p>
                Road quality inspection for NHAI project with the help of drones
                .
              </p>
            </div>

            <div className="flex flex-col justify-evenly ">
              <Button icon={RefreshIcon} className="my-2">
                drone_script.js
              </Button>
              <Button icon={RefreshIcon} className="my-2">
                Attach Component
              </Button>
              <Button icon={RefreshIcon} className="my-2">
                Log files
              </Button>
              <Button icon={RefreshIcon} className="my-2">
                Delete
              </Button>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col justify-center items-center">
              <div>+</div>
              <div>Add more devices to your inventory</div>
            </div>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default IOTinventory;
