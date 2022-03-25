import React from "react";

import "./style.css";

const YoutubeEmbed = (props) => {
  return (
    <>
      <div className="video">
        <img
          className="cross"
          src="images/cross.svg"
          onClick={props.closeModal}
          alt=""
        />
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${props.id}?start=${props.start}&autoplay=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </>
  );
};
export default YoutubeEmbed;
