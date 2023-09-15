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
import {BsCloudUpload} from "react-icons/bs";
import {MdManageSearch} from "react-icons/md";
// import {MdFindReplace} from "react-icons/md";
import {BsBoxArrowUpRight} from "react-icons/bs";
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
                        <Button icon={BsCloudUpload} className="my-2">
                          Deploy Data Scripts
                        </Button>
                        <Button icon={MdManageSearch} className="my-2">
                          Manage Component
                        </Button>
                        <Button icon={BsBoxArrowUpRight} className="my-2">
                          Post issue
                        </Button>
                      </div>
                    </Link>
                  </Card>

                  <Card>
  <div className="text-center">
    <Title className="text-xl font-semibold">
      <Bold>Expand Your Inventory</Bold>
    </Title>
    <p className="text-gray-600 mt-2">
      Add IoT devices to meet your project's requirements. Start customizing!
    </p>
  </div>

  <div className="relative mt-5 border-1 border-dashed border-blue-400">
    <Link to="/iot/iotEdit">
      <Card className="flex justify-center items-center cursor-pointer transform hover:scale-105 transition-transform">
        <span className="text-4xl text-blue-500 mr-2">+</span>
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
