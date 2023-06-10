import React from "react";
import { Rings } from 'react-loader-spinner';

const Button = ({Convert, loading}) => {
  return (
    <button
      className="d-flex justify-content-center btn btn-info rounded-2"
      onClick={Convert}
    >
      {loading ? (
        <Rings height="24" width="24" color="white" size={6} />
      ) : (
        "Convert to Hebrew"
      )}
    </button>
  );
};

export default Button;
