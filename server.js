const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require("cors");

const app = express();
app.use(cors());

const CLIENT_ID = "bfa6d10ccfa946508ae22badd7138b8a";
const CLIENT_SECRET = "ff1dd6e10e23444490e1929418597dca";

// Get Spotify access token
async function getToken() {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64")
        },
        body: "grant_type=client_credentials"
    });

    const data = await result.json();
    return data.access_token;
}

// Search albums
app.get("/search", async (req, res) => {
    const query = req.query.q;
    const token = await getToken();

    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    const data = await response.json();
    res.json(data);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});