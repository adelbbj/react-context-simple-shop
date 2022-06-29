import axios from "axios";

export const request = axios.create({
  baseURL: "https://store.darkube.app/",
  timeout: 60000,
  //   headers: { "X-Custom-Header": "foobar" },
});
