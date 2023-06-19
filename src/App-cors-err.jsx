import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getGHLAuth = async () => {
      const url2 =
        "https://app.cyberizegroup.com/v2/contacts/?locationId=4rKuULHASyQ99nwdL1XH";
      const options2 = {
        method: "GET",
        headers: {
          Authorization: "51777a70ca40f051a47da214153b5263a6c927ba",
          Version: "2021-07-28",
          Accept: "application/json",
        },
      };

      try {
        const response = await fetch(url2, options2);
        const data2 = await response.json();
        console.log(data2);
      } catch (error) {
        console.error(error);
      }
    };

    getGHLAuth();
  }, []);

  return <div>{data && <p>{JSON.stringify(data)}</p>}</div>;
}

export default App;
