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
      encodedParams.set("grant_type", "authorization_code");
      encodedParams.set(
        "redirect_uri",
        "https://app.cyberizegroup.com/gohighlevel/oauth/callback"
      );
      encodedParams.set("code", "27467dc332fe5258fd44fc3b2919955a02a8fd2d");
      encodedParams.set("refresh_token", "refresh_token");
      // encodedParams.set("user_type", "");

      // const url = "https://app.cyberizegroup.com/gohighlevel/oauth/token";
      const url = "https://services.leadconnectorhq.com/oauth/token";

      const options = {
        method: "POST",
        url: url,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        data: encodedParams,
      };

      try {
        const { data } = await axios.request(options);
        console.log(data.access_token);
      } catch (error) {
        console.error(error);
      }
    };

    getGHLAuth();
  }, []);

  return <div>{data && <p>{JSON.stringify(data)}</p>}</div>;
}

export default App;
