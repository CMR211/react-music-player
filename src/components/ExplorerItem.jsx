import React from "react"
import 'remixicon/fonts/remixicon.css'

export default function ExplorerItem({ icon, title }) {
    return (
        <div className="explorer__menu__item">
            <i className={icon} />
            <p>{title}</p>
        </div>
    )
}
