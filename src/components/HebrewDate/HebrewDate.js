import React from "react";

const HebrewDate = ({ DateHebrew }) => {
  return (
    <>
      {DateHebrew === "" ? (
        <h3 className="heb-date text-center text-danger">No Data to Display</h3>
      ) : (
        <h3 className="heb-date text-center text-success">{DateHebrew}</h3>
      )}
    </>
  );
};

export default HebrewDate;
