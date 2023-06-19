import React, { useEffect, useState } from "react";

function YourComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let api_key = "16a99c7d97fb4c4684d35a7bcdc397ddf4b26882";
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + api_key);

    fetch("https://app.cyberizegroup.com/gohighlevel/contacts/", {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <div>{data && <p>{JSON.stringify(data)}</p>}</div>;
}

export default YourComponent;
