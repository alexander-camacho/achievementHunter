import React from "react"
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                Achievement Hunter
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/saved">In Progress</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/random">Random</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Nav