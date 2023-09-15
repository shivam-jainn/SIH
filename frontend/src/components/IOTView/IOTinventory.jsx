import { Title, Bold, Card, Button, Subtitle } from "@tremor/react";
import React from "react";
import { Select, SelectItem } from "@tremor/react";

const IOTinventory = () => {
  return (
    <>
      <main>
        <Title>Edit Project</Title>

        <div className="border p-0 md:p-6 bg-slate-50">
          <div>
            <Title>
              <Bold>Drone : QI check 01201 BA</Bold>{" "}
            </Title>
            <p>
              Road quality inspection for NHAI project with the help of drones .
            </p>
          </div>

          <Card>
            <div>
              <Title>
                <Bold>Add more devices</Bold>{" "}
              </Title>
              <p>
                Add IoT devices as per the project needs. Happy customizing :)
              </p>
            </div>

            <div className="relative h-[100%] my-2 border-1 border-dashed border-blue-400">
              <Card className="flex justify-center items-center flex-col">
                <span>
                  <Button variant="light">Upload a file</Button> or drag and
                  drop
                </span>

                <span>
                  <Subtitle>.js/.ts up to 10MB</Subtitle>
                </span>
              </Card>
            </div>
          </Card>


        <Card>
        <Select>
        <SelectItem value="1" >
          Up time components
        </SelectItem>
        <SelectItem value="2" >
          Bar Chart Components
        </SelectItem>
        <SelectItem value="3" >
          Scatter Charts Components
        </SelectItem>
        <SelectItem value="4" >
          Line Graph Components
        </SelectItem>
      </Select>
          </Card>
        </div>
      </main>
    </>
  );
};

export default IOTinventory;
