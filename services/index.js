import axios from "axios";

export default async function GetAssets(props) {
  return await axios.get(props.url);
}

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const attachJwt = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }
};

export const Auth = () => {
  if (localStorage.jwt_token) {
    attachJwt(localStorage.jwt_token);
  }
};

export const constants = (props) => {
  const token = props.jwt_token;
};

const JSONbig = require("json-bigint");
axios.defaults.transformResponse = [
  function (data) {
    return JSONbig.parse(data);
  },
];
export const fetcher = (url) => (isLoggedIn() ? axios.get(url) : null);
export const isLoggedIn = () =>
  typeof window === "undefined" ? false : !!localStorage.jwt_token;
