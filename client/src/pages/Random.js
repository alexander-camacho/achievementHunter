import React, { useEffect } from "react"
import RandomBtn from "../components/RandomBtn"
import AchieveBanner from "../components/AchieveBanner"
import PlayerCard from "../components/PlayerCard"
import { useStoreContext } from "../utils/GlobalState"
import { SET_ACHIEVEMENT } from "../utils/actions"
import API from "../utils/API"

const Random = () => {

    const [state, dispatch] = useStoreContext()


    const pull = () => {
        const allAchieves = []
        API.getAchievements(state.characters[0].realm, state.characters[0].name, state.token).then(res => {
            for (var i = 0; i < res.data.achievements.length; i++) {
                allAchieves.push(res.data.achievements[i])
            }
            checkComplete(allAchieves)
            handleGetRandom(incomplete)
        })
    }

    const incomplete = []

    const checkComplete = (array) => {
        for (var i = 0; i < array.length; i++) {
            if (!array[i].completed_timestamp) {
                incomplete.push(array[i])
            }
        }
    }

    const handleGetRandom = (array) => {
        const randomAchieve = array[Math.floor(Math.random() * array.length)]
        dispatch({
            type: SET_ACHIEVEMENT,
            achievement: {
                randomAchieve
            }
        })
    }

    if(!state.characters){
        return <div>no character</div>
    }

    // Run the pull() function on page load.
    useEffect(() => {
        pull()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col md-6">
                    <PlayerCard />
                </div>
                <div className="col md-6">
                    <RandomBtn onClick={() => pull()} />
                    <AchieveBanner data={state.achievement} />
                </div>
            </div>
        </div>
    )
}

export default Random