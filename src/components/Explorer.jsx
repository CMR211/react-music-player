import React from "react"
import axios from "axios"

import ExplorerMenu from "./ExplorerMenu"
import ExplorerItem from "./ExplorerItem"

import avatar from "../asset/random-avatar.png"

import capitalize from "../utils/capitalize"

const explorerItems = [
    { title: "playlists", icon: "ri-play-list-fill", type: "menu" },
    { title: "new releases", icon: "ri-star-fill", type: "menu" },
    { title: "discover", icon: "ri-home-2-fill", type: "menu" },
    { title: "trending", icon: "ri-bar-chart-fill", type: "menu" },
    { title: "broadcast", icon: "ri-broadcast-fill", type: "menu" },
    { title: "inbox", icon: "ri-inbox-fill", type: "social" },
    { title: "friends", icon: "ri-user-star-fill", type: "social" },
    { title: "community", icon: "ri-team-fill", type: "social" },
    { title: "team", icon: "ri-bubble-chart-fill", type: "social" },
]

export default function Explorer({ setCurrentPage, currentPage, spotifyToken, logoutFromSpotify }) {
    const [user, setUser] = React.useState("")

    React.useEffect(
        () => async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${spotifyToken}`,
                },
            })
            setUser(data)
            console.log(data)
        },
        []
    )

    return (
        <div className="explorer">
            <div className="explorer__item explorer__avatar" onClick={() => logoutFromSpotify()}>
                {user === "" ? ( // Random user for development purposes
                    <>
                        <img alt="Your profile" src={avatar} width={60} height={60} />
                        <p>Monica</p>
                    </>
                ) : (
                    <>
                        <img alt="Your profile" src={user.images[0].url} width={60} height={60}  />
                        <p>{user.display_name}</p>
                    </>
                )}
            </div>

            <ExplorerMenu title="Menu">
                {explorerItems
                    .filter(item => item.type === "menu")
                    .map(item => (
                        <ExplorerItem id={item.title} title={capitalize(item.title)} icon={item.icon} onClick={() => setCurrentPage(item.title)} />
                    ))}
            </ExplorerMenu>

            <ExplorerMenu title="Social">
                {explorerItems
                    .filter(item => item.type === "social")
                    .map(item => (
                        <ExplorerItem id={item.title} title={capitalize(item.title)} icon={item.icon} onClick={() => setCurrentPage(item.title)} />
                    ))}
            </ExplorerMenu>
        </div>
    )
}
