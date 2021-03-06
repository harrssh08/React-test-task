import React, { useEffect, useState } from "react";
import Display from "../Display/Display";
import Input from "../Input_box/Input";
import getYoutubeId from "npm-get-youtube-id";
import DisplayChannel from "../Display/DisplayChannel";
import { GetChannelID, videos_limit } from "../../API_functions/config";
import {
  Playlist_API,
  Channel_API2,
  Videos_API,
  Channel_API1,
} from "../../API_functions/API";
import Secondpage from "../SecondPage/Secondpage";
import "./Getinfo.css";

const Getinfo = () => {
  const [data, setData] = useState([]);
  const [inp, setInp] = useState("");
  const [selectedOption, setSelectedOption] = useState("0");
  const [videosData, setVideosData] = useState(null);
  const [page, setPage] = useState("first");
  const getValue = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    setPage("first");
  }, [data]);

  const delData = (id) => {
    if (selectedOption === "1") {
      setData((olddata) => {
        return olddata.filter((arrelement, index) => {
          return index !== id;
        });
      });
    } else {
      setVideosData((olddata) => {
        return olddata.filter((arrelement, index) => {
          return index !== id;
        });
      });
    }
  };
  //get Video data
  const getdata = async (url) => {
    try {
      let ytid = getYoutubeId(url);

      const response = await Videos_API(ytid);

      if (data.length > videos_limit - 1) {
        alert("Only 10 Videos you can add in demo version");
      } else {
        setData([...data, response]);
        setInp("");
      }
    } catch (e) {
      alert("Something went Wrong!!");
      //console.log(e);
    }
  };
  //get channel Videos
  const getvideosdata = async (url) => {
    try {
      let collections = GetChannelID(url);
      let channelID = collections.slice(-1).toString();

      if (collections.includes("c")) {
        const playlist_id = await Channel_API1(channelID);

        const videos_data = await Playlist_API(
          playlist_id.data.items[0].contentDetails.relatedPlaylists.uploads
        );
        setVideosData(videos_data.data.items);
        setInp("");
      } else {
        const playlist_id = await Channel_API2(channelID);

        const videos_data = await Playlist_API(
          playlist_id.data.items[0].contentDetails.relatedPlaylists.uploads
        );
        setVideosData(videos_data.data.items);
        setInp("");
      }
    } catch (e) {
      alert("Something went Wrong!!");
    }
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
      {/* <div style={{ display: "grid" }}> */}
      {selectedOption === "1" ? (
        <div className="cards-container">
          <Display data={data} delData={delData} />
        </div>
      ) : (
        <div className="cards-container">
          <DisplayChannel data={videosData} delData={delData} />
        </div>
      )}
      {/* </div> */}
      {/* Button */}
      <div>
        <div className="container text-center my-5">
          <button
            className="btn justify-center"
            style={{ backgroundColor: "#34c36d", color: "white" }}
            onClick={() => {
              if (data.length !== 0) {
                setPage("second");
              } else {
                alert("Please add Video First");
              }
            }}
          >
            Search
          </button>
        </div>

        {page === "second" ? (
          <>
            <Secondpage data={data} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Getinfo;
