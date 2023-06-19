import React, { useEffect, useState } from "react";

function YourComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getGHLAuth = async () => {
      const { URLSearchParams } = require("url");
      const fetch = require("node-fetch");

      const encodedParams = new URLSearchParams();
      encodedParams.set("client_id", "6385ab3772dc8bd36dcebfec-lhfngw3q");
      encodedParams.set(
        "client_secret",
        "cfce409b-a4fc-4fe9-9bd0-9e4cfb401c9f"
      );
      encodedParams.set("grant_type", "authorization_code");
      encodedParams.set("code", "");
      encodedParams.set("refresh_token", "");
      encodedParams.set("user_type", "");
      encodedParams.set("redirect_uri", "");

      const url = "https://services.leadconnectorhq.com/oauth/token";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: encodedParams,
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

  return <div>{data && <p>{JSON.stringify(data)}</p>}</div>;
}

export default YourComponent;
