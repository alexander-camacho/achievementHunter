import React from "react"
import { Link } from "react-router-dom"

const fourOhFour = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Character not found please try again</h2>
            <Link to="/">Return Home</Link>
            </div>
    )
}

export default fourOhFour