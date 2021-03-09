import React from "react"

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Achievement Hunter
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">In Progress</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Nav