import { BarChart, Card, Subtitle, Title } from "@tremor/react";

const chartdata2 = [
  {
    // name: "21st-27th",
    Monday: 690,
    Tuesday: 800,
    Wednesday: 738,
    Thursday: 896,
    Friday: 738,
    Saturday: 836,
  },
];

const WeeklyAttendence = (props) => {
  return (
    <>
      <Title>21st-27th July</Title>
      <BarChart
        className="mt-6 p-4"
        data={chartdata2}
        index="name"
        categories={[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ]}
        colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
        // valueFormatter={dataFormatter}
        yAxisWidth={50}
      />
    </>
  );
};

export default WeeklyAttendence;
