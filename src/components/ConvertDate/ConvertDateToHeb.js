import axios from "axios";
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import DateSelction from "./dateSelction";
import { formatDate } from "../../services/services";

const ConvertDateToHebrew = () => {
  const [DateHebrew, setDateHebrew] = useState("");
  const [loading, setIsLoading] = useState(false);
  const dateInput = useRef();
  //**change the date format to fit axios request */
  // const formatDate = (date = new Date()) => {
  //   return [
  //     date.getFullYear(),
  //     (date.getMonth() + 1).toString().padStart(2, "0"),
  //     date.getDate().toString().padStart(2, "0"),
  //   ].join("-");
  // };
  dateInput.value = formatDate();

  const [DateGregorian, setDateGregorian] = useState(dateInput.value);
  useEffect(() => {
    //set date to user corrent date at first launch
    Convert();
  }, []);
  //**convert selected gregorian date to hebrew date using API*/
  const Convert = async () => {
    setIsLoading(true);
    console.log(DateGregorian);
    const dateArr = DateGregorian.split("-");
    let url =
      "converter?cfg=json&gy=" +
      dateArr[0] +
      "&gm=" +
      dateArr[1] +
      "&gd=" +
      dateArr[2];

    let resp = await axios.get("https://www.hebcal.com/" + url);
    setIsLoading(false);
    setDateHebrew(resp.data.hebrew);
  };
  return (
    <div className=" d-flex flex-column h-100 p-2 mt-5 rounded-4 align-items-center justify-center">
      <h1 className="text-center display-1">Pick the date</h1>
      <div className="form-control input-group mt-2 border-info d-flex flex-column align-items-center">
        <div className="mb-3 bg-info">
          <DateSelction setDateGregorian={setDateGregorian} />
        </div>
        <Button Convert={Convert} loading={loading} />
      </div>
      <DateHebrew DateHebrew={DateHebrew} />
    </div>
  );
};

export default ConvertDateToHebrew;
