import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import DateSelction from "../DateSelection";
import HebrewDate from "../HebrewDate";
import { formatDate } from "../../services/services";

const ConvertDateToHeb = () => {
  const [DateHebrew, setDateHebrew] = useState("");

  const [loading, setIsLoading] = useState(false);

  //**change the date format to fit axios request and set it to default date */
  const [DateGregorian, setDateGregorian] = useState(formatDate());

  useEffect(() => {
    //set date to user corrent date at first launch
    Convert();
  },[]);
  //**convert selected gregorian date to hebrew date using API*/
  const Convert = async () => {
    setIsLoading(true);
    const dateArr = DateGregorian.split("-");
    let url = `converter?cfg=json&gy=${dateArr[0]}&gm=${dateArr[1]}&gd=${dateArr[2]}`;

    let { data } = await axios.get(`https://www.hebcal.com/${url}`);
    setIsLoading(false);
    setDateHebrew(data.hebrew);
  };
  return (
    <div className=" d-flex flex-column h-100 p-2 mt-5 rounded-4 align-items-center justify-center">
      <h1 className="header text-center display-1">Pick the date</h1>
      <div className="form-control input-group mt-2 border-info d-flex flex-column align-items-center">
        <div className="mb-3 bg-info">
          <DateSelction setDateGregorian={setDateGregorian} />
        </div>
        <Button Convert={Convert} loading={loading} />
      </div>
      <HebrewDate DateHebrew={DateHebrew} />
    </div>
  );
};

export default ConvertDateToHeb;
