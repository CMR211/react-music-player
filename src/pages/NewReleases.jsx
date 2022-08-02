import React from "react"
import axios from "axios"
import useSpotifyNewReleases from "../utils/useSpotifyNewReleases"

import Album from "../components/Album"

export default function NewReleases({ spotifyToken }) {
    const [albums, setAlbums] = React.useState("")
    const [offset, setOffset] = React.useState(0)

    useSpotifyNewReleases(spotifyToken, setAlbums, albums, offset)

    if (!albums)
        return (
            <div>
                <p>Loading</p>
            </div>
        )
    return (
        <>
            <div className="albums">
                {albums.map(album => {
                    return <Album image={album.images[0].url} title={album.name} artist={album.artists[0].name} />
                })}
            </div>
            <div className="buttons">
                <button className="spotify-button">Previous</button>
                <button className="spotify-button">Next</button>
            </div>
        </>
    )
}
