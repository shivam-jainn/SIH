import { Title, Bold, Card, Button, Subtitle, Grid } from "@tremor/react";
import React from "react";
import { Select, SelectItem } from "@tremor/react";
import { RefreshIcon } from "@heroicons/react/outline";

const IOTinventory = () => {
  return (
    <>
      <main>
        <Title>Inventory</Title>

        <Grid numItems={6} className="gap-4">

        <Card>
                  <div>
                  <Title><Bold>Drone : QI check 01201 BA</Bold> </Title>
                  <p>Road quality inspection for NHAI project with the help of drones .</p>
                  </div>


    <div className="flex flex-col justify-evenly ">
        <Button icon={RefreshIcon} className="my-2" >Deploy Data Scripts</Button>
        <Button icon={RefreshIcon} className="my-2">Manage Component</Button>
        <Button icon={RefreshIcon} className="my-2">Place issue</Button>
    </div>

                </Card>

                  <Card>
                  <div>
                  <Title><Bold>Drone : QI check 01201 BA</Bold> </Title>
                  <p>Road quality inspection for NHAI project with the help of drones .</p>
                  </div>


    <div className="flex flex-col justify-evenly ">
        <Button icon={RefreshIcon} className="my-2" >Deploy Data Scripts</Button>
        <Button icon={RefreshIcon} className="my-2">Manage Component</Button>
        <Button icon={RefreshIcon} className="my-2">Place issue</Button>
    </div>

                </Card>
        </Grid>
      </main>
    </>
  );
};

export default IOTinventory;
