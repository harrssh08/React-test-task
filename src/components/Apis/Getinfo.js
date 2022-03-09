import React, { useState } from "react";
import requestOptions from "./requestOptions";
import Display from "../Display/Display";
import Input from "../Input_box/Input";
import getYoutubeId from "npm-get-youtube-id";
import DisplayChannel from "../Display/DisplayChannel";

const Getinfo = () => {
  const [data, setData] = useState([]);
  const [inp, setInp] = useState("");
  const [selectedOption, setSelectedOption] = useState("0");
  const [videosData, setVideosData] = useState(null);
  console.log(videosData);
  const getValue = (e) => {
    setSelectedOption(e.target.value);
  };

  const delData = (id) => {
    setData((olddata) => {
      return olddata.filter((arrelement, index) => {
        return index !== id;
      });
    });
  };

  const getdata = (url) => {
    let ytid = getYoutubeId(url);

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ytid}&key=AIzaSyBHP5FZDmvx8YtQGSVtZx0ChphxgkdZoWA`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (data.length > 9) {
          alert("Only 10 Videos you can add in demo version");
        } else {
          setData([...data, result]);
          setInp("");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getvideosdata = () => {
    //let channelID = getYoutubeChannelId(url)

    fetch(
      "https://www.googleapis.com/youtube/v3/channels?id=UCJWh7F3AFyQ_x01VKzr9eyA&key=AIzaSyBHP5FZDmvx8YtQGSVtZx0ChphxgkdZoWA&part=contentDetails",
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${result.items[0].contentDetails.relatedPlaylists.uploads}&key=AIzaSyBHP5FZDmvx8YtQGSVtZx0ChphxgkdZoWA&part=snippet&maxResults=5`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => setVideosData(result))
          .catch((error) => console.log("error", error));
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {/* Input and Select */}
      <Input
        inp={inp}
        getValue={getValue}
        setInp={setInp}
        getdata={getdata}
        option={selectedOption}
        getvideosdata={getvideosdata}
      />
      {/* Disply data*/}
      {selectedOption === "1" ? (
        <Display data={data} delData={delData} />
      ) : (
        <DisplayChannel data={videosData} />
      )}
    </>
  );
};

export default Getinfo;
