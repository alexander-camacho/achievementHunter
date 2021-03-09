import React from "react"
import PlayerData from "../../PlayerData"
import PlayerImg from "../../PlayerImg"


function PlayerCard() {

    return (

            <div className="card">
                <img src={PlayerImg.assets[1].value} alt="..." className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">{PlayerData.name} Level {PlayerData.level}</h2>
                    <h3>{PlayerData.race.name} {PlayerData.active_spec.name} {PlayerData.character_class.name}</h3>
                    <h4>{PlayerData.achievement_points} Achievement Points</h4>
                </div>
            </div>
    )
}

export default PlayerCard