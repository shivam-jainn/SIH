import React, { useState } from "react";

const IssueCard = ({ title, description }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState("");
  const [isClosed, setIsClosed] = useState(false); // Add state for issue closure

  const toggleCommentSection = () => {
    setIsCommenting(!isCommenting);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCloseIssue = () => {
    // Implement your logic to close the issue
    // For example, you can set isClosed to true
    setIsClosed(true);
  };

  return (
    <div className={`bg-white p-4 shadow-md rounded-md mb-4 ${isClosed ? 'opacity-50' : ''}`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex justify-end space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={toggleCommentSection}
        >
          Comment
        </button>
        <button
          className={`${
            isClosed ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700'
          } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          onClick={handleCloseIssue}
          disabled={isClosed}
        >
          {isClosed ? "Closed" : "Close Issue"}
        </button>
      </div>
      {isCommenting && (
        <div className="mt-4">
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Add a comment..."
            rows="4"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <div className="mt-2 flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                // Handle comment submission logic here
                console.log(`Comment submitted for issue: ${title}`);
                setIsCommenting(false); // Close comment section after submission
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueCard;
