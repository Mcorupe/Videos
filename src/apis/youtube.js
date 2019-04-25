import axios from "axios";

const KEY = "AIzaSyBSdL9_uil7sPolhQkhrp1RUoPi9v_VDgQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
