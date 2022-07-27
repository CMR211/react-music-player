import React from "react"
import Explorer from "../components/Explorer"

export default function App() {
    return (
        <div className="main-container">
            <Explorer />
            <div className="content">Content</div>
            <div className="player">Player</div>
        </div>
    )
}
