import { useRef } from "react";
import { formatDate } from "../../services/services";


const DateSelction = ({ setDateGregorian }) => {
  
  const dateInput = useRef();
  // set UI default date to current user date
  dateInput.value = formatDate();
  return (
    <div className="">
      <input
        ref={dateInput}
        defaultValue={dateInput.value}
        type="date"
        // change gregorian date to selected date
        onChange={(e) => setDateGregorian(dateInput.current.value)}
      />
    </div>
  );
};
export default DateSelction;
