import React from "react"
import { DELETE_ACHIEVEMENT } from "../utils/actions"
import { useStoreContext } from "../utils/GlobalState"

const Saved = () => {

    const [state, dispatch] = useStoreContext()


    const removeAchievement = id => {
        dispatch({
            type: DELETE_ACHIEVEMENT,
            id: id
        });
    }

    if (!state.savedAchievements) {
        return <div>No achievements saved!</div>
    }
    return (
        <div>
            {state.savedAchievements.map(function (saved) {
                return <li key={saved.achievement.id}><a target="_blank}" href={`//wowhead.com/achievement=${saved.achievement.id}`}>{saved.achievement.achievement.name}</a>
                    <button onClick={() => removeAchievement(saved.achievement.id)}>Remove</button>
                </li>
            })}
        </div>
    )
}

export default Saved