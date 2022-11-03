import react from "react"
import logo from "./img/mundo.png"

export default function Nav() {
    return (
        <nav className="navbar">
            <img src={logo} />
            <h1>my travel journal.</h1>
        </nav>
    )
}