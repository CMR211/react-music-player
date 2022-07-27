import React from "react"

export default function ExplorerMenu({ title, children }) {
    return (
        <div className="explorer__item explorer__menu">
            <h2 className="explorer__menu__title">{title}</h2>
            {children}
        </div>
    )
}
