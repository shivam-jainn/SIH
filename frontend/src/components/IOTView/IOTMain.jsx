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
import { Link } from "react-router-dom";

import { RefreshIcon } from "@heroicons/react/outline";
import {
  Bold,
  Button,
  Flex,
  Italic,
  Metric,
  Subtitle,
  Text,
  Title,
} from "@tremor/react";

import { SearchSelect, SearchSelectItem } from "@tremor/react";

import Chart from "../ClientView/Chart";
import NavBar from "../Navbar/Navbar";

export default function IOTMain() {
  return (
    <>
      <NavBar className="z-50" />
      <div className=" border m-10  p-0 md:p-6 bg-slate-50">
        <main>
          <Title>Welcome , FreshIOT</Title>

          <TabGroup className="mt-6">
            <TabList>
              <Tab icon={UserGroupIcon}>NHAI border b1-2821</Tab>
              <Tab>+</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                  <Card>
                    <div>
                      <Title>
                        <Bold>Drone : QI check 01201 BA</Bold>{" "}
                      </Title>
                      <p>
                        Road quality inspection for NHAI project with the help
                        of drones .
                      </p>
                    </div>

                    <Link to="/iot/iotInventory">
                      <div className="flex flex-col justify-evenly ">
                        <Button icon={RefreshIcon} className="my-2">
                          Deploy Data Scripts
                        </Button>
                        <Button icon={RefreshIcon} className="my-2">
                          Manage Component
                        </Button>
                        <Button icon={RefreshIcon} className="my-2">
                          Place issue
                        </Button>
                      </div>
                    </Link>
                  </Card>

                  <Card className="">
                    <div>
                      <Title>
                        <Bold>Add more devices</Bold>{" "}
                      </Title>
                      <p>
                        Add iot devices as per the project needs . Happy
                        customising :)
                      </p>
                    </div>

                    <div className="relative h-[100%] my-5 border-1 border-dashed border-blue-400">
                      <Link to="/iot/iotEdit">
                        <Card className="flex  justify-center align-middle  ">
                          Add Device . Click Here
                        </Card>
                      </Link>
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
    </>
  );
}
