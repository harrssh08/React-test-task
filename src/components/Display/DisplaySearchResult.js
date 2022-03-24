import React, { useState } from "react";
import "./DisplaySearchResult.css";
import CaptionCard from "../Card/CaptionCard";
import YoutubeEmbed from "../Youtube/YoutubeEmbed";

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
      <iframe
        className="video"
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${props.id}?autoplay=50`}
      ></iframe>
      {showHide ? (
        <div className="cap">
          <p className="cap-head">
            in this video
            <img
              className="arrow"
              src="images/arrow.svg"
              alt="arrow"
              onClick={() => setShowHide(!showHide)}
            />
          </p>

          <div className="card-line"></div>
          <div className="cap-data">
            {props.caps.length !== 0 ? (
              <>
                {props.caps.map((d, ind) => {
                  return <CaptionCard key={ind} data={d} />;
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
