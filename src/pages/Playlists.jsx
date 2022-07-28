import React from "react"
import axios from "axios"

export default function Playlists({ spotifyToken }) {
    const [playlists, setPlaylists] = React.useState("")
    React.useEffect(
        () => async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: `Bearer ${spotifyToken}`,
                },
                params: {
                    limit: 8,
                    offset: 0
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
        <div className="playlists">
            {playlists.map(playlist => {
                return (
                    <div className="playlist-image">
                        <img src={playlist.images[0].url} />
                        <p>{playlist.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
