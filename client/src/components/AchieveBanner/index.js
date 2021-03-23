import React from "react"
import { SAVE_ACHIEVEMENT } from "../../utils/actions"
import { useStoreContext } from "../../utils/GlobalState"

function AchieveBanner(props) {

    const [state, dispatch] = useStoreContext()

    const url = `//wowhead.com/achievement=${props.data?.randomAchieve?.achievement?.id}`

    const name = props.data?.randomAchieve?.achievement?.name

    const saveAchieve = () => {
        dispatch({
            type: SAVE_ACHIEVEMENT,
            saveAchieve: state.achievement.randomAchieve,
        })
    }

    return (
        <div className="achievement">
            <a target="_blank}" href={url}>{name}</a>

            {/* save button */}
            <button onClick={() => saveAchieve()}>Save</button>
        </div>
    )
}

export default AchieveBanner