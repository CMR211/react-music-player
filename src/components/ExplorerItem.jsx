import React from "react"
import "remixicon/fonts/remixicon.css"

export default function ExplorerItem({ icon, title, onClick }) {
    return (
        <div className="explorer__menu__item" onClick={() => onClick()}>
            <i className={icon} />
            <p>{title}</p>
        </div>
    )
}
