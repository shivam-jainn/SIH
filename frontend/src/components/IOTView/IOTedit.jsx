import {
  Bold,
  Button,
  Card,
  Metric,
  Select,
  SelectItem,
  Subtitle,
  Title,
} from "@tremor/react";
import React, { useRef, useState } from "react";
import NavBar from "../Navbar/Navbar";

const IOTedit = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
      setFileUploaded(true);
    } else {
      setSelectedFileName("");
      setFileUploaded(false);
    }
  };

  const handleChooseAnotherClick = () => {
    // Clear the selected file and open the file explorer again
    setSelectedFileName("");
    setFileUploaded(false);
    fileInputRef.current.value = null; // Reset the file input
    fileInputRef.current.click(); // Trigger a click event to open the file explorer
  };

  return (
    <>
      <NavBar />
      <main className="m-10">
        <Metric className="my-5 text-2xl">Edit Project</Metric>

        <div className="border p-4 md:p-6 bg-slate-100 rounded-lg shadow-md">
          <div className="pb-4">
            <Title className="text-xl font-semibold">
              <Bold>Drone : QI check 01201 BA</Bold>{" "}
            </Title>
            <p className="text-gray-600">
              Road quality inspection for NHAI project with the help of drones.
            </p>
          </div>

          <Card className="p-4">
            <div>
              <Title className="text-lg font-semibold">
                <Bold>Add more devices</Bold>{" "}
              </Title>
              <p className="text-gray-600">
                Add IoT devices as per the project needs. Happy customizing :)
              </p>
            </div>

            <div className="relative mt-4 h-32 border-2 border-dashed border-blue-400 rounded-lg p-4 flex flex-col justify-center items-center">
              {fileUploaded ? (
                <>
                  <p className="mt-2 text-blue-500">
                    Selected file: {selectedFileName}
                  </p>
                  <Button
                    variant="light"
                    onClick={handleChooseAnotherClick}
                    className="mt-4"
                  >
                    Choose Another
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="light" onClick={handleFileInputClick}>
                    {selectedFileName ? "Choose Another" : "Upload a file"}
                  </Button>
                  <p className="mt-2 text-gray-600">or drag and drop</p>
                  <Subtitle className="mt-2">.js/.ts</Subtitle>
                  {/* Hidden file input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                </>
              )}
            </div>
          </Card>

          <Card className="mt-4 p-4">
            <Select>
              <SelectItem value="1">Up time components</SelectItem>
              <SelectItem value="2">Bar Chart Components</SelectItem>
              <SelectItem value="3">Scatter Charts Components</SelectItem>
              <SelectItem value="4">Line Graph Components</SelectItem>
            </Select>
          </Card>
        </div>
      </main>
    </>
  );
};

export default IOTedit;
