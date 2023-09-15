import React from "react";

const IssueCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex justify-end space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            // Handle comment button click
            console.log(`Comment button clicked for issue: ${title}`);
          }}
        >
          Comment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            // Handle close issue button click
            console.log(`Close issue button clicked for issue: ${title}`);
          }}
        >
          Close Issue
        </button>
      </div>
    </div>
  );
};

export default IssueCard;
