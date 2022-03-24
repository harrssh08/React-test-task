import React, { useState } from "react";
import YoutubeEmbed from "../Youtube/YoutubeEmbed";

const CaptionCard = (props) => {
  const convert = (v) => {
    const v1 = v.split(".");
    const value = v1[0];
    return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
  };
  const st = (v) => {
    const v1 = v.split(".");
    return v1[0];
  };
  return (
    <>
      <div className="caption-card">
        <a
          className="cap-start"
          onClick={() => {
            props.setPlay([]);
            props.setPlay([props.id, st(props.data.start)]);
          }}
        >
          From : {convert(props.data.start)}
        </a>
        <p className="caption-text">{props.data.text}</p>
      </div>
    </>
  );
};

export default CaptionCard;
