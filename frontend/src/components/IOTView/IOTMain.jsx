// "use client";
import { UserGroupIcon } from "@heroicons/react/solid";

import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";

import { Metric, Title, Subtitle, Bold, Italic, Text } from "@tremor/react";
import { Button } from "@tremor/react";
import { Flex } from "@tremor/react";
import { RefreshIcon } from "@heroicons/react/outline";

import { SearchSelect, SearchSelectItem } from "@tremor/react";

import Chart from "../ClientView/Chart";

export default function IOTMain() {
  return (
    <div className=" border p-0 md:p-6 bg-slate-50">
    
      <main>
        <Title>Welcome , FreshIOT</Title>


        <TabGroup className="mt-6">
          <TabList>
            <Tab icon={UserGroupIcon}>NHAI border  b1-2821</Tab>
            <Tab>+</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
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
                  <Title><Bold>Add more devices</Bold> </Title>
                  <p>Add iot devices as per the project needs . Happy customising :)</p>
                  </div>
          
                <div className="relative h-[100%] my-2 border-1 border-dashed border-blue-400">
                <Card className="flex justify-center align-middle  ">
                Add Device . Click Here 
                </Card>

                </div>


          </Card>

              </Grid>
             
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <div className="h-96" />
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </div>
  );
}