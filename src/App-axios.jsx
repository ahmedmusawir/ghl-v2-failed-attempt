import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getGHLAuth = async () => {
      const encodedParams = new URLSearchParams();
      encodedParams.set("client_id", "6385ab3772dc8bd36dcebfec-lhfngw3q");
      encodedParams.set(
        "client_secret",
        "cfce409b-a4fc-4fe9-9bd0-9e4cfb401c9f"
      );
      encodedParams.set(
        "grant_type",
        "16a99c7d97fb4c4684d35a7bcdc397ddf4b26882"
      );
      // encodedParams.set("code", "");
      // encodedParams.set("refresh_token", "");
      // encodedParams.set("user_type", "");
      // encodedParams.set("redirect_uri", "");

      const url = "https://app.cyberizegroup.com/gohighlevel/oauth/token";

      const options = {
        method: "POST",
        url: url,
        headers: {
          "Content-Type": "multipart/form-data",
          // "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        data: encodedParams,
      };

      try {
        const { data } = await axios.request(options);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    getGHLAuth();
  }, []);

  return <div>{data && <p>{JSON.stringify(data)}</p>}</div>;
}

export default App;
