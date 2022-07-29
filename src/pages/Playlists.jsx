import React from "react"
import axios from "axios"

import Album from "../components/Album"
import useSpotifyFetch from "../utils/useSpotifyFetch.ts"

export default function Playlists({ spotifyToken }) {
    const [playlists, setPlaylists] = React.useState("")
    const [offset, setOffset] = React.useState(0)

    React.useEffect(
        () => async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: `Bearer ${spotifyToken}`,
                },
                params: {
                    limit: 8,
                    offset: 0,
                },
            })
            setPlaylists(data.items)
            console.log(playlists)
        },
        []
    )
    if (!playlists)
        return (
            <div>
                <p>Loading</p>
            </div>
        )
    return (
        <div className="albums">
            {playlists.map(playlist => {
                return <Album image={playlist.images[0].url} title={playlist.name} subtitle={playlist.owner.display_name} />
            })}
        </div>
    )
}
