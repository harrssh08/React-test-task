import React from "react";
import "./style.css";

const YoutubeEmbed = (props) => {
  return (
    <div className="video">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props.id}?start=${props.start}&autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
export default YoutubeEmbed;
