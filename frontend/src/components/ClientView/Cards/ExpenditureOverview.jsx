import { Card, DonutChart, Title } from "@tremor/react";
const expenses = [
  {
    name: "Labor Costs",
    sales: 5500000, // Replace with the actual amount spent on labor costs
  },
  {
    name: "Equipment Costs",
    sales: 5000000, // Replace with the actual amount spent on equipment costs
  },
  {
    name: "Training and Development",
    sales: 1000000, // Replace with the actual amount spent on training and development
  },
  {
    name: "Misc",
    sales: 2000000, // Replace with the actual amount spent on miscellaneous expenses
  },
  {
    name: "Contingency Fund",
    sales: 2000000, // Replace with the actual amount allocated for contingency
  },
];

const valueFormatter = (number) =>
  Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    number
  );

import React from "react";

const ExpenditureOverview = (props) => {
  return (
    <div className="">
      <Title>Expenditure:</Title>
      <DonutChart
        className="mt-20"
        data={expenses}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
      />
    </div>
  );
};

export default ExpenditureOverview;
