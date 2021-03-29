import React, { useEffect } from "react"
import { UPDATE_CHARACTER, LOADING, SET_IMAGE } from "../../utils/actions"
import API from "../../utils/API"
import { useStoreContext } from "../../utils/GlobalState"

function PlayerCard() {

    const [state, dispatch] = useStoreContext()

    const player = () => {
        dispatch({ type: LOADING });
        API.getCharacter(state.characters[0].realm, state.characters[0].name, state.token).then(res => {
            dispatch({
                type: UPDATE_CHARACTER,
                name: res.data.name,
                realm: res.data.realm.slug,
                level: res.data.level,
                race: res.data.race.name,
                spec: res.data.active_spec.name,
                class: res.data.character_class.name,
                points: res.data.achievement_points,
                faction: res.data.faction.name
            })
        })
    }

    const img = () => {
        API.getImg(state.characters[0].realm, state.characters[0].name, state.token).
            then(res => {
                dispatch({
                    type: SET_IMAGE,
                    img: res.data.assets[0].value
                })

            })
    }

    const checkFaction = () => {
        if (state.characters[0].faction === 'Alliance'){
            return 'primary'
        } else {
            return 'danger'
        }
    }

    useEffect(() => {
        img()
        player()
    }, [])

    return (
        <div>
            <div className={`card mb-3 bg-${checkFaction()}`}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={state.img} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{state.characters[0].name}</h5>
                            <p className="card-text">Level {state.characters[0].level} {state.characters[0].race}</p><p className="card-text">{state.characters[0].spec} {state.characters[0].class}</p>
                            <p className="card-text">{state.characters[0].points} Achievement Points</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PlayerCard