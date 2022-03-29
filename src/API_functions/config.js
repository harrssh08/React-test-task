const BASE_URL = "https://youtube.googleapis.com/youtube/v3/";

const GetChannelID = (url) => {
  let collections = url.split("/");
  return collections;
};

const requestOptions = {
  method: "GET",
  mode: "no-cors",
  headers: {
    // Authorization:
    //   "Bearer ",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  redirect: "follow",
};

const videos_limit = 10;

export { GetChannelID, BASE_URL, requestOptions, videos_limit };
