import React from "react"

function AchieveBanner(props) {
    const name = props.data.achievement.name
    return (
        <div className="achievement">{name}

            {/* save button */}
            <button onClick={() => console.log('test')}>Save</button>
        </div>
    )
}

export default AchieveBanner