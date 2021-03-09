import React, { useState, useEffect } from "react"
import achievements from "../achievements"
import RandomBtn from "../components/RandomBtn"
import AchieveBanner from "../components/AchieveBanner"
import PlayerCard from "../components/PlayerCard"

const Random = () => {

    const [random, setRandom] = useState([])

    const allAchieves = (achievements[0].achievements)
    const incomplete = []

    const checkComplete = (item) => {
        if (!item.completed_timestamp) {
            incomplete.push(item)
        }
    }
    allAchieves.forEach(checkComplete)

    const handleGetRandom = (array) => {

        return ((array[Math.floor(Math.random() * array.length)]))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6">
                    <PlayerCard />
                </div>
                <div className="col md-6">
                    {/* Add functionality to generate random achievement */}
                    <RandomBtn onClick={() => setRandom(handleGetRandom(incomplete))} />
                    <AchieveBanner data={handleGetRandom(incomplete)} />
                </div>
            </div>
        </div>
    )
}

export default Random