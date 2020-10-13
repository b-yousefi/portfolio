import React from "react";

const Chip = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "0 20px",
        height: "25px",
        fontSize: "14px",
        lineHeight: "25px",
        borderRadius: "20px",
        backgroundColor: props.color,
        color: "white",
      }}
    >
      {props.title}
    </div>
  );
};

export default Chip;
