import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BarChart, Card, Subtitle, Title } from "@tremor/react";
import WeeklyAttendence from "./WeeklyAttendence";
// import "./attendence.css";
const Attendence = (props) => {
  return (
    <>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <Card>
            <WeeklyAttendence />
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card>
            <WeeklyAttendence />
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card>
            <WeeklyAttendence />
          </Card>
        </SplideSlide>
      </Splide>{" "}
    </>
  );
};

export default Attendence;
