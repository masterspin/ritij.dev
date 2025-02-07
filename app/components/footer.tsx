"use client";

import { useEffect, useState } from "react";
import { getCurrentlyPlayingTrack, refreshAccessToken } from "@/lib/spotify";
import { SpotifyIcon } from "./icons";

export function Footer() {
  const [track, setTrack] = useState<any>(null);
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        if (refreshToken) {
          const newAccessToken = await refreshAccessToken(refreshToken);
          if (newAccessToken) {
            const currentlyPlayingTrack =
              await getCurrentlyPlayingTrack(newAccessToken);
            setTrack(currentlyPlayingTrack);
          }
        }
      } catch (error) {
        console.error("Failed to fetch Spotify data:", error);
        setTrack(null);
      }
    };

    fetchSpotifyData();

    // Set up an interval to fetch Spotify data every minute (60000 milliseconds)
    const intervalId = setInterval(fetchSpotifyData, 1000); // Adjust the interval as needed

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [refreshToken]);

  return (
    <footer className="fixed bottom-0 z-50 backdrop-blur-sm flex justify-between items-center w-full p-6">
      <div className="flex items-center space-x-4">
        {track &&
        track.item &&
        track.item.album &&
        track.item.album.images &&
        track.item.album.images.length > 0 ? (
          <>
            <a
              href={track.item.album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={track.item.album.images[0].url}
                alt="Album Art"
                className="icon h-12 w-12"
              />
            </a>
            <div className="flex flex-col justify-between h-full">
              <div>
                <a
                  href={track.item.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="underline-effect text-sm font-bold">
                    {track.item.name}
                  </p>
                </a>
              </div>
              <div>
                <a
                  href={track.item.artists[0].external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="underline-effect text-sm font-bold">
                    {track.item.artists[0].name}
                  </p>
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <SpotifyIcon url="https://spotify.com" className="h-12 w-12" />
            <div>
              <p className="text-sm font-bold">Tunes are on pause</p>
            </div>
          </>
        )}
      </div>
      <div className="text-right">
        <p className="text-sm font-bold">made by Ritij Jutur</p>
      </div>
    </footer>
  );
}
