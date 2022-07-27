import React from "react"

import ExplorerMenu from "./ExplorerMenu"
import ExplorerItem from "./ExplorerItem"

import avatar from "../asset/random-avatar.png"

import { RiHome2Fill } from "react-icons/ri"

export default function Explorer() {
    return (
        <div className="explorer">
            <div className="explorer__item explorer__avatar">
                <img src={avatar} width={60} height={60} />
                <p>Monica</p>
            </div>
            <ExplorerMenu title="Menu">
                <ExplorerItem title="Discover" icon="ri-home-2-fill" />
                <ExplorerItem title="Trending" icon="ri-bar-chart-fill" />
                <ExplorerItem title="Favorites" icon="ri-star-fill" />
                <ExplorerItem title="Playlists" icon="ri-play-list-fill" />
                <ExplorerItem title="Broadcast" icon="ri-broadcast-fill" />
            </ExplorerMenu>
            <ExplorerMenu title="Categories">
                <ExplorerItem title="Inbox" icon="ri-inbox-fill" />
                <ExplorerItem title="Friends" icon="ri-user-star-fill" />
                <ExplorerItem title="Community" icon="ri-team-fill" />
                <ExplorerItem title="Team" icon="ri-bubble-chart-fill" />
            </ExplorerMenu>
        </div>
    )
}
