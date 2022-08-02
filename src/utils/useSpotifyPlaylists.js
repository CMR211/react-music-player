import React from "react"
import axios from "axios"

export default function useSpotifyPlaylists (spotifyToken, setPlaylists, playlists, offset)  {React.useEffect(
    () => async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
                Authorization: `Bearer ${spotifyToken}`,
            },
            params: {
                limit: 8,
                offset: offset,
            },
        })
        setPlaylists(data.items)
        console.log(playlists)
    },
    []
)}