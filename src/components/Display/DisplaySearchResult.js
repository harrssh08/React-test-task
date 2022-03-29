import React, { useState } from "react";
import "./DisplaySearchResult.css";
import CaptionCard from "../Card/CaptionCard";

const DisplaySearchResult = (props) => {
  const [showHide, setShowHide] = useState(false);

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  return (
    <>
      <div className="result_box" onClick={() => setShowHide(!showHide)}>
        <img className="thumbnail" src={props.image} alt="thumbnail" />
        <div className="description">
          <div>
            <h5 className="heading">{props.head}</h5>
            <p className="channel_name">By: {props.channel}</p>
          </div>
          <div className="time-view-container">
            <p className="video_duration">
              🕒 {props.time.replace("H", ":").replace("M", ":")}
            </p>
            <p className="video_view">👁️ {kFormatter(props.view)} </p>
          </div>
        </div>
      </div>

      {showHide ? (
        <>
          <div className="caption_card">
            <p className="caption_heading">
              In this video
              <img
                className="arrow"
                src="images/arrow.svg"
                alt="arrow"
                onClick={() => setShowHide(!showHide)}
              />
            </p>

            <div className="caption_data">
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
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DisplaySearchResult;
