import React from "react";
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
import NavBar from "../Navbar/Navbar";
import Attendence from "./Cards/Attendence/Attendence";
import ExpenditureOverview from "./Cards/ExpenditureOverview";
import ProjectDetails from "./Cards/ProjectDetails";
import Chart from "./Chart";
import IssueCard from "./IssueCard"; // Import the IssueCard component

export default function ClientMain() {
  // Fake issues data
  const issues = [
    {
      title: "Foundation Cracks",
      description: "Cracks have been observed in the foundation of the building, requiring immediate attention and repair.",
    },
    {
      title: "Structural Instability",
      description: "The building's structure is showing signs of instability, and there's a risk of collapse. Urgent reinforcement is needed.",
    },
    {
      title: "Water Leakage",
      description: "Water leakage has been reported in several areas of the building, causing damage to interiors and equipment. Waterproofing is required.",
    },
    {
      title: "Electrical Issues",
      description: "Electrical problems, including power outages and faulty wiring, need to be resolved to ensure safety and functionality.",
    },
    {
      title: "Plumbing Problems",
      description: "Multiple plumbing issues, such as pipe leaks and drainage problems, are affecting the building's functionality and hygiene.",
    },
  ];
  

  return (
    <>
      <NavBar className="z-50" />
      <div className="border m-10 md:p-6 px-2 bg-slate-50">
        <div className="md:w-[60%] mx-auto mb-10 space-y-6">
          <SearchSelect>
            <SearchSelectItem value="1">NHAI Border b1-1616</SearchSelectItem>
          </SearchSelect>
        </div>
        <main>
          <Title>NHAI Border b1-1616</Title>
          <Text>Road mapping QI for 12.5 KM to 45.5 KM on Sarjapura Highways.</Text>

          <TabGroup className="mt-6">
            <TabList>
              <Tab icon={UserGroupIcon}>Overview</Tab>
              <Tab>Issues</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                  <Card>
                    <ProjectDetails />
                  </Card>
                  <Card>
                    <ExpenditureOverview />
                  </Card>
                  <Card>
                    <Title>Attendance:</Title>
                    <Attendence />
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
                  {issues.map((issue, index) => (
                    <IssueCard key={index} title={issue.title} description={issue.description} />
                  ))}
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </main>
      </div>
    </>
  );
}
