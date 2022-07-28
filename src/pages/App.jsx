import React from "react"
import Explorer from "../components/Explorer"
import Content from "./Content"

export default function App() {
    const SPOTIFY_API_CREDENTIALS = {
        CLIENT_ID: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        REDIRECT_URI: "http://localhost:3000",
        AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
        RESPONSE_TYPE: "token",
    }

    const [currentPage, setCurrentPage] = React.useState("discover")

    const [spotifyToken, setSpotifyToken] = React.useState("")
    React.useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash
                .substring(1)
                .split("&")
                .find(elem => elem.startsWith("access_token"))
                .split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setSpotifyToken(token)
    }, [])

    function logoutFromSpotify() {
        setSpotifyToken("")
        window.localStorage.removeItem("token")
    }

    if (!spotifyToken)
        return (
            <a className="spotify-login" href={`${SPOTIFY_API_CREDENTIALS.AUTH_ENDPOINT}?client_id=${SPOTIFY_API_CREDENTIALS.CLIENT_ID}&redirect_uri=${SPOTIFY_API_CREDENTIALS.REDIRECT_URI}&response_type=${SPOTIFY_API_CREDENTIALS.RESPONSE_TYPE}`}>
                Login to Spotify <i className="ri-spotify-fill"></i>
            </a>
        )

    return (
        <div className="main-container">
            <Explorer currentPage={currentPage} spotifyToken={spotifyToken} setCurrentPage={setCurrentPage} />
            <Content currentPage={currentPage} />
            <div className="player">Player</div>
        </div>
    )
}
