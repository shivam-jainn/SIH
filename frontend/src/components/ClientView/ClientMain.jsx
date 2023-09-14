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

export default function DashboardExample() {
  return (
    <div className=" border p-6 bg-slate-50">
      <div className="w-[60%] mx-auto mb-10 space-y-6">
        <SearchSelect>
          <SearchSelectItem value="1">Project 1</SearchSelectItem>
          <SearchSelectItem value="2">Project 2</SearchSelectItem>
          <SearchSelectItem value="3">Project 2</SearchSelectItem>
          <SearchSelectItem value="4">Project 4</SearchSelectItem>
        </SearchSelect>
      </div>
      <main>
        <Title>Project Title</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <TabGroup className="mt-6">
          <TabList>
            <Tab icon={UserGroupIcon}>Overview</Tab>
            <Tab>Issues</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <Card>
                  {/* Placeholder to set height */}
                  <div className="h-28" />
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
