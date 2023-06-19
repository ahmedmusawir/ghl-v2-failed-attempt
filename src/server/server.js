require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/getContacts", async (req, res) => {
  const url = "https://app.gohighlevel.com/v2/contacts/";
  // const url = "https://app.cyberizegroup.com/v2/contacts/";

  const options = {
    headers: {
      params: { locationId: "4rKuULHASyQ99nwdL1XH" },
      Authorization: "51777a70ca40f051a47da214153b5263a6c927ba",
      // Authorization: "7fca99071da81320d43b4406fbf6253e815aa1df",

      Version: "2021-07-28",
      Accept: "application/json",
    },
  };

  try {
    const response = await axios.get(url, options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
    // res.status(500).json({ error: "Error retrieving contacts" });
  }
});

// app.get('/getGHLToken', async (req, res) => {
//     const params = new URLSearchParams();
//     params.append('client_id', process.env.GHL_CLIENT_ID);
//     params.append('client_secret', process.env.GHL_CLIENT_SECRET);
//     params.append('grant_type', 'authorization_code');
//     params.append('code', req.query.code);
//     params.append('redirect_uri', process.env.REDIRECT_URI);

//     try {
//         const response = await axios.post('https://api.gohighlevel.com/oauth/token', params, {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//         });
//         res.json(response.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error retrieving token' });
//     }
// });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
