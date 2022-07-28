import React from "react"

export default function Content({ currentPage }) {
    if (currentPage === "discover") return <div>Discover</div>
    if (currentPage === "trending") return <div>Trending</div>
    return <div>Content</div>
}
