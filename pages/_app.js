import React from "react";

import "../assets/styles/globals.css";
import "../assets/styles/fontIcons.css";
import "../assets/styles/fonts.css";
import { Auth } from "../services/index";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    Auth();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
