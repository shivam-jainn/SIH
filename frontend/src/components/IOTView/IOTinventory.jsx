import { Title, Bold, Card, Button, Subtitle, Grid } from "@tremor/react";
import React from "react";
import { Select, SelectItem } from "@tremor/react";
import { RefreshIcon } from "@heroicons/react/outline";

const IOTinventory = () => {
  return (
    <>
      <main>
        <Title>Inventory</Title>

        <Grid numItems={6} numItemsMd={3} className="gap-4">

                  <Card>
                  <div>
                  <Title><Bold>Drone : QI check 01201 BA</Bold> </Title>
                  <p>Road quality inspection for NHAI project with the help of drones .</p>
                  </div>


    <div className="flex flex-col justify-evenly ">
        <Button icon={RefreshIcon} className="my-2" >drone_script.js</Button>
        <Button icon={RefreshIcon} className="my-2">Attach Component</Button>
        <Button icon={RefreshIcon} className="my-2">Log files</Button>
        <Button icon={RefreshIcon} className="my-2">Delete</Button>

    </div>

                </Card>




        <Card>
                <div className="flex flex-col justify-center items-center">
                    <div>+</div>
                    <div>
                Add more devices to your inventory

                    </div>
                </div>

                </Card>

        </Grid>
      </main>
    </>
  );
};

export default IOTinventory;
