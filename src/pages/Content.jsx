import React from "react"
import Playlists from "./Playlists"
import NewReleases from "./NewReleases"

import capitalize from "../utils/capitalize"

export default function Content({ currentPage, spotifyToken }) {
    let adv
    if (currentPage === "playlists") adv = <Playlists spotifyToken={spotifyToken} />
    if (currentPage === "new releases") adv = <NewReleases spotifyToken={spotifyToken} />
    return (
        <div>
            <h1 className="content-title">{capitalize(currentPage)}</h1>
            {adv}
        </div>
    )
}
