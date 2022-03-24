import React from "react";

const CaptionCard = (props) => {
  function convert(v) {
    const v1 = v.split(".");
    const value = v1[0];
    return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
  }
  return (
    <div className="caption-card">
      <p style={{ color: "#CF203F" }}>From : {convert(props.data.start)}</p>
      <p style={{ color: "#4B5869" }}>{props.data.text}</p>
    </div>
  );
};

export default CaptionCard;
