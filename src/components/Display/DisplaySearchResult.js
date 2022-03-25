import React, { useState } from "react";
import "./DisplaySearchResult.css";
import CaptionCard from "../Card/CaptionCard";
import Circle from "../Circle/Circle";

const DisplaySearchResult = (props) => {
  const [showHide, setShowHide] = useState(false);

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  return (
    <>
      <div className="box" onClick={() => setShowHide(!showHide)}>
        <img className="thumb" src={props.image} alt="thumbnail" />
        <div className="desc">
          <h5 className="heading">{props.head}</h5>
          <p className="channel">By: {props.channel}</p>
          <p id="s_v">👁️ {kFormatter(props.view)} </p>
          <p id="s_d">🕒 {props.time.replace("H", ":").replace("M", ":")}</p>
        </div>
      </div>

      {showHide ? (
        <div className="cap">
          <p className="cap-head">
            In this video
            <img
              className="arrow"
              src="images/arrow.svg"
              alt="arrow"
              onClick={() => setShowHide(!showHide)}
            />
          </p>

          <Circle />

          <div className="cap-data">
            {props.caps.length !== 0 ? (
              <>
                {props.caps.map((d, ind) => {
                  return <CaptionCard key={ind} data={d} id={props.id} />;
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DisplaySearchResult;
