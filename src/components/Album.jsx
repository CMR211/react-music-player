import React from "react"

export default function Album({ image, title, artist, subtitle }) {
    return (
        <div className="album-image">
            <img src={image} alt={title} />
            <p>{title}</p>
            {artist ? <p>{artist}</p> : null}
            {subtitle ? <p>{subtitle}</p> : null}
        </div>
    )
}
