import React from "react";

const MarkWrong: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) {
    return <></>;
  }
  return <div className="mark mark--wrong">{"wrong"}</div>;
};

export default MarkWrong;
