import { useRef } from "react";

const DateSelction = ({ setDateGregorian }) => {
  const dateInput = useRef();
  return (
    <div className="mb-3 bg-info">
      <input
        ref={dateInput}
        defaultValue={dateInput.value}
        type="date"
        onChange={(e) => setDateGregorian(dateInput.current.value)}
      />
    </div>
  );
};

export default DateSelction;
