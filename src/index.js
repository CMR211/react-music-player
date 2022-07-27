// React imports
import React from "react"
import ReactDOM from "react-dom/client"

// Styles
import "./styles/index.css"

// Pages
import App from "./pages/App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
