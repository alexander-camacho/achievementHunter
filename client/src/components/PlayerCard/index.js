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
                points: res.data.achievement_points
            })
        })
    }

    const img = () => {
        API.getImg(state.characters[0].realm, state.characters[0].name, state.token).
            then(res => {
                dispatch({
                    type: SET_IMAGE,
                    img: res.data.assets[1].value
                })

            })
    }

    useEffect(() => {
        img()
        player()
    }, [])
    return (

        <div className="card">
            <img src={state.img} alt="..." className="card-img-top" />
            <div className="card-body">
                <h2 className="card-title">{state.characters[0].name} Lv.{state.characters[0].level}</h2>
                <h3>{state.characters[0].race}</h3> <h3>{state.characters[0].spec} {state.characters[0].class}</h3>
                <h4>{state.characters[0].points} Achievement Points</h4>
            </div>
        </div>
    )
}

export default PlayerCard