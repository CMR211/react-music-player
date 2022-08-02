import React from "react"
// import axios from "axios"

import Album from "../components/Album"
import useSpotifyPlaylists from "../utils/useSpotifyPlaylists"

export default function Playlists({ spotifyToken }) {
    const [playlists, setPlaylists] = React.useState("")
    const [offset, setOffset] = React.useState(0)

    useSpotifyPlaylists(spotifyToken, setPlaylists, playlists, offset)

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
