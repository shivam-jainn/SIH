import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    key: "Project Type:",
    value: "Highway",
  },
  {
    key: "Project Head",
    value: "Shivam Jain",
  },
  {
    key: "Project Status",
    value: "On Time",
  },
  {
    key: "Project Deadline",
    value: "22-Dec-2023",
  },
  {
    key: "Allocated Budget",
    value: "34,00,00,000",
  },
];

export default () => (
  <div className="">
    <Title>Project Details:</Title>
    <List>
      {cities.map((item) => (
        <ListItem key={item.key}>
          <span>{item.key}</span>
          <span>{item.value}</span>
        </ListItem>
      ))}
    </List>
  </div>
);
