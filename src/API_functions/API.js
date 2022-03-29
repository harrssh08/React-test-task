import axios from "axios";
import { BASE_URL, requestOptions } from "./config";

const API_KEY = process.env.API_KEY;

//this api is for fetching top 5 videos using playlist id
const Playlist_API = async (playlist_id) => {
  const Videos_data = await axios.get(
    `${BASE_URL}playlistItems?playlistId=${playlist_id}&key=${API_KEY}&part=snippet&maxResults=5`,
    requestOptions
  );
  return Videos_data;
};

//this api is for fetching videos details using video id
const Videos_API = async (videoID) => {
  const Videos_data = await axios.get(
    `${BASE_URL}videos?&part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${API_KEY}`,
    requestOptions
  );

  const cap = await axios.get(`http://localhost:5000/get?id=${videoID}`);
  const arr = [];
  arr.push(Videos_data);
  arr.push(cap);
  return arr;
};

//this api is for fetching playlist id using channel name
const Channel_API1 = async (channelID) => {
  const channel_API1 = await axios.get(
    `${BASE_URL}channels?part=contentDetails&forUsername=${channelID}&key=${API_KEY}`,
    requestOptions
  );
  return channel_API1;
};

//this api is for fetching playlist id using channel id
const Channel_API2 = async (channelID) => {
  const channel_API2 = await axios.get(
    `${BASE_URL}channels?id=${channelID}&part=contentDetails&key=${API_KEY}`,
    requestOptions
  );
  return channel_API2;
};

export { Channel_API2, Channel_API1, Videos_API, Playlist_API };
