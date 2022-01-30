import React from "react";

const MarkDone: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) {
    return <></>;
  }
  return <div className="mark mark--done">{"done"}</div>;
};

export default MarkDone;
