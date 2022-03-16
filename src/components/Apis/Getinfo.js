import React, { useState, createContext } from "react";
import requestOptions from "./requestOptions";
import Display from "../Display/Display";
import Input from "../Input_box/Input";
import getYoutubeId from "npm-get-youtube-id";
import DisplayChannel from "../Display/DisplayChannel";
import axios from "axios";
import { BASE_URL } from "../../API_functions/API_data";
import GetChannelID from "../../API_functions/Getchannelid";
import Videos_API from "../../API_functions/Videos_API";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import GetCaptions from "../SecondPage/Details/GetCaptions";

const Getinfo = () => {
  const [data, setData] = useState([]);
  const [inp, setInp] = useState("");
  const [selectedOption, setSelectedOption] = useState("0");
  const [videosData, setVideosData] = useState(null);

  const API_KEY = "AIzaSyBHP5FZDmvx8YtQGSVtZx0ChphxgkdZoWA"; //process.env.API_KEY;

  const getValue = (e) => {
    setSelectedOption(e.target.value);
  };

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

  const getdata = async (url) => {
    try {
      let ytid = getYoutubeId(url);

      const response = await axios.get(
        `${BASE_URL}videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ytid}&key=${API_KEY}`,
        requestOptions
      );

      if (data.length > 9) {
        alert("Only 10 Videos you can add in demo version");
      } else {
        setData([...data, response.data]);
        setInp("");
      }
    } catch (e) {
      alert("Something went Wrong!!");
      //console.log(e);
    }
  };

  const getvideosdata = async (url) => {
    try {
      let collections = GetChannelID(url);
      let channelID = collections.slice(-1).toString();

      if (collections.includes("c")) {
        const playlist_id = await axios.get(
          `${BASE_URL}channels?part=contentDetails&forUsername=${channelID}&key=${API_KEY}`,
          requestOptions
        );

        const videos_data = await Videos_API(
          playlist_id.data.items[0].contentDetails.relatedPlaylists.uploads
        );
        setVideosData(videos_data.data.items);
        setInp("");
      } else {
        const playlist_id = await axios.get(
          `${BASE_URL}channels?id=${channelID}&key=${API_KEY}&part=contentDetails`,
          requestOptions
        );

        const videos_data = await Videos_API(
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
      <div className="container text-center my-5">
        <Link to="/search">
          <button
            className="btn justify-center"
            style={{ backgroundColor: "#34c36d", color: "white" }}
          >
            Search
          </button>
        </Link>
      </div>
      {/* Disply data*/}

      {selectedOption === "1" ? (
        <Display data={data} delData={delData} />
      ) : (
        <DisplayChannel data={videosData} delData={delData} />
      )}

      <UserContext.Provider value={data}>
        <GetCaptions />
      </UserContext.Provider>
    </>
  );
};

export default Getinfo;
