import React, { useState } from "react";
import YoutubeEmbed from "../Youtube/YoutubeEmbed";
import Popup from "reactjs-popup";

const CaptionCard = (props) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const convert = (v) => {
    const v1 = v.split(".");
    const value = v1[0];
    return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
  };
  const st = (v) => {
    const v1 = v.split(".");
    return v1[0];
  };

  const capitalizeFirstLetter = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };
  return (
    <>
      <div className="caption-card">
        <div className="fix-line">
          <div className="line">
            <div className="round" onClick={() => setOpen((o) => !o)}></div>
          </div>
        </div>
        <p className="cap-start" onClick={() => setOpen((o) => !o)}>
          From : {convert(props.data.start)}
        </p>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <YoutubeEmbed
            id={props.id}
            start={st(props.data.start)}
            closeModal={closeModal}
          />
        </Popup>
        <p className="caption-text">{capitalizeFirstLetter(props.data.text)}</p>
      </div>
    </>
  );
};

export default CaptionCard;
