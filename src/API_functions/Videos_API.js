import axios from "axios";
import { BASE_URL } from "./API_data";

import requestOptions from "../components/Apis/requestOptions";

const Videos_API = async (playlist_id) => {
  const API_KEY = process.env.API_KEY;
  const Videos_data = await axios.get(
    `${BASE_URL}playlistItems?playlistId=${playlist_id}&key=${API_KEY}&part=snippet&maxResults=5`,
    requestOptions
  );
  return Videos_data;
};

export default Videos_API;
