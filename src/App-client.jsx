import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      const authorizationCode = "your-authorization-code"; // Replace with your actual authorization code
      let accessToken = "51777a70ca40f051a47da214153b5263a6c927ba";

      // try {
      //   // Request access token from your own server
      //   const response = await axios.get(
      //     `http://localhost:3000/getGHLToken?code=${authorizationCode}`
      //   );
      //   accessToken = response.data.access_token;
      // } catch (error) {
      //   console.error(error);
      //   return;
      // }

      try {
        // Request contacts from your own server
        const response = await axios.get(
          `http://localhost:4000/getContacts?access_token=${accessToken}`
        );
        const contacts = response.data;
        console.log(contacts);
        setData(contacts); // Set the fetched data to state
      } catch (error) {
        console.error(error);
      }
    };

    getContacts();
  }, []);

  return <div>{data && <p>{JSON.stringify(data)}</p>}</div>;
}

export default App;
