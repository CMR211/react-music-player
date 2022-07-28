import React from "react"
import Playlists from "./Playlists"
import TopArtists from "./TopArtists"

import capitalize from "../utils/capitalize"

export default function Content({ currentPage, spotifyToken }) {
    let adv
    if (currentPage === "playlists") adv = <Playlists spotifyToken={spotifyToken} />
    if (currentPage === "top artists") adv = <TopArtists spotifyToken={spotifyToken} />
    return (
        <div>
            <h1 className="content-title">{capitalize(currentPage)}</h1>
            {adv}
        </div>
    )
}
