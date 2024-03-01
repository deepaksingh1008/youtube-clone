import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    q: "music",
    part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": "47929a282dmsha42c1a0c013cc1ap1ceafejsn878db518fd71",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// export const fetchSearchApi = async (url, query) => {
//   const {data} = await axios.get(`${BASE_URL}`)
// }
