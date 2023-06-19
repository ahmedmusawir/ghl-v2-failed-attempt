import React, { useEffect, useState } from "react";

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
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          // "Content-Type":
          //   "multipart/form-data; boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL",
          // Accept: "multipart/form-data",
        },
        body: encodedParams,
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("Access Token:", data);
      } catch (error) {
        console.error(error);
      }
    };

    getGHLAuth();
  }, []);

  return <div>{data && <p>{JSON.stringify(data)}</p>}</div>;
}

export default App;
