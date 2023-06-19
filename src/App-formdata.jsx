import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getGHLAuth = async () => {
      const formData = new FormData();
      formData.append("client_id", "6385ab3772dc8bd36dcebfec-lhfngw3q");
      formData.append("client_secret", "cfce409b-a4fc-4fe9-9bd0-9e4cfb401c9f");
      formData.append("grant_type", "16a99c7d97fb4c4684d35a7bcdc397ddf4b26882");

      const url = "https://services.leadconnectorhq.com/oauth/token";

      const options = {
        method: "POST",
        url: url,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        data: formData,
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
