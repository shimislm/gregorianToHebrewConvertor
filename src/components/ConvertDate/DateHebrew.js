import React from "react";

const DateHebrew = ({ DateHebrew }) => {
  return (
    <>
      {DateHebrew === "" ? (
        <h3 className="text-center text-danger">No Data to Display</h3>
      ) : (
        <h3 className="text-center text-success">{DateHebrew}</h3>
      )}
    </>
  );
};

export default DateHebrew;
