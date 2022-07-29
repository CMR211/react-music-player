import React from "react"
import axios from "axios"

import Album from "../components/Album"

export default function NewReleases({ spotifyToken }) {
    const [albums, setAlbums] = React.useState("")
    const [offset, setOffset] = React.useState(0)

    React.useEffect(
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
    )

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
