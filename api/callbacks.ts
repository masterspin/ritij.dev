import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const code = req.query.code as string;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!redirectUri || !clientId || !clientSecret) {
    res.status(500).send("Server Error: Spotify environment variables not set");
    return;
  }

  const tokenResponse = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  const { access_token, refresh_token } = tokenResponse.data;

  // Store refresh token securely, e.g., in a database
  console.log(`Refresh Token: ${refresh_token}`);

  res.redirect("/");
}
