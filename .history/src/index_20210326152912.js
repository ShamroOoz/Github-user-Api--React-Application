import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
require("dotenv").config();
const domain = process.env.DOMAIN;
const clientId = process.env.CLIENT_ID;
console.log(domain);
console.log(clientId);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-sham007.us.auth0.com"
      clientId="xZxNUGVHSJl48cvKWzxMNUlSVrRqtTm9"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
