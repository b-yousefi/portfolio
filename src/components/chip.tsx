import React from "react";

interface ChipProps {
  color: string;
  title: string;
}

const Chip: React.FC<ChipProps> = ({ color, title }) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "0 20px",
        height: "25px",
        fontSize: "14px",
        lineHeight: "25px",
        borderRadius: "20px",
        backgroundColor: color,
        color: "white",
      }}
    >
      {title}
    </div>
  );
};

export default Chip;

