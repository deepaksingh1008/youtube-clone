import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const options = {
  params: {
    q: "music",
    part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST,
  },
};

export const fetchFromApi = async (url) => {
  try {
    const options = {
      params: {
        q: "music",
        part: "snippet,id",
        regionCode: "US",
        maxResults: "50",
        order: "date",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_HOST,
      },
    };
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/${url}`,
      options
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchComment = async (id) => {
  try {
    const options = {
      params: {
        part: "snippet",
        videoId: id,
        maxResults: "100",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_HOST,
      },
    };
    const { data } = await axios.get(import.meta.env.VITE_COMMENT_URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchSearchApi = async (url, query) => {
//   const {data} = await axios.get(`${BASE_URL}`)
// }
