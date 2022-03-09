import { useEffect, useState } from "react";
import ChannelCard from "../Card/ChannelCard";

const DisplayChannel = (props) => {
  return (
    <>
      {props.data ? (
        props.data.items.map((d, index) => {
          return (
            <ChannelCard
              key={index}
              title={d.snippet.title}
              channel={d.snippet.channelTitle}
              view={d.statistics.viewCount}
              duration={d.contentDetails.duration.slice(2, -1)}
              thumb={d.snippet.thumbnails.medium.url}
            />
          );
        })
      ) : (
        <p>No Data</p>
      )}
    </>
  );
};

export default DisplayChannel;
