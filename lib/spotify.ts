import axios from 'axios';

export const refreshAccessToken = async (refreshToken: string) => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
    if (!clientId || !clientSecret) {
      throw new Error('Server Error: Spotify environment variables not set');
    }
  
    const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  
    return response.data.access_token;
  }

export const getCurrentlyPlayingTrack = async (accessToken: string) => {
  const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  return response.data;
};

export default refreshAccessToken;
