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
  Text,
  Title,
} from "@tremor/react";

import { SearchSelect, SearchSelectItem } from "@tremor/react";
import Chart from "./Chart";

export default function ClientMain() {
  return (
    <div className=" border p-0 md:p-6 bg-slate-50">
      <div className="md:w-[60%] mx-auto mb-10 space-y-6">
        <SearchSelect>
          <SearchSelectItem value="1">NHAI Border b1-1616</SearchSelectItem>
          {/* <SearchSelectItem value="2">Project 2</SearchSelectItem>
          <SearchSelectItem value="3">Project 2</SearchSelectItem>
          <SearchSelectItem value="4">Project 4</SearchSelectItem> */}
        </SearchSelect>
      </div>
      <main>
        <Title>NHAI Border b1-1616</Title>
        <Text>
          Road mapping QI for 12.5 KM to 45.5 KM on Sarjapura Highways.
        </Text>

        <TabGroup className="mt-6">
          <TabList>
            <Tab icon={UserGroupIcon}>Overview</Tab>
            <Tab>Issues</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <Card>
                  <Chart />
                </Card>
                <Card>
                  {/* Placeholder to set height */}
                  <div className="h-28" />
                </Card>
                <Card>
                  {/* Placeholder to set height */}
                  <div className="h-28" />
                </Card>
              </Grid>
              <div className="mt-6">
                <Card>
                  <div className="h-80" />
                </Card>
              </div>
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
