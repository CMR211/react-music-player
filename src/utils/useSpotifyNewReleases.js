import React from "react"
import axios from "axios"

export default function useSpotifyNewReleases(spotifyToken, setAlbums, albums, offset) {React.useEffect(
    () => async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/browse/new-releases", {
            headers: {
                Authorization: `Bearer ${spotifyToken}`,
            },
            params: {
                limit: 8,
                offset: offset,
                country: "PL",
            },
        })
        setAlbums(data.albums.items)
        console.log(albums)
    },
    []
)}