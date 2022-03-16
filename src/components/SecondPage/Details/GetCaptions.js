import React, { useContext, useState } from "react";
import UserContext from "../../Apis/UserContext";
import { getSubtitles } from "youtube-captions-scraper";

function GetCaptions() {
  const data = useContext(UserContext);
  const [caps, setCaps] = useState([]);

  getSubtitles({
    videoID: "UuD4J7Yrc-A",
  }).then(function (captions) {
    console.log(captions);
  });

  //setCaps([...caps, cap]);

  return <></>;
}

export default GetCaptions;
