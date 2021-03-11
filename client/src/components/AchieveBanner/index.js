import React from "react"

function AchieveBanner(props) {

    const url = `//wowhead.com/achievement=${props.data?.randomAchieve?.achievement?.id}`

    const name = props.data?.randomAchieve?.achievement?.name

    return (
        <div className="achievement">
            <a target="_blank}" href={url}>{name}</a>

            {/* save button */}
            <button onClick={() => console.log('test')}>Save</button>
        </div>
    )
}

export default AchieveBanner