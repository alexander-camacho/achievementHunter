import React, { createContext, useReducer, useContext } from "react"
import {
    SET_CHARACTER,
    SET_ACHIEVEMENT,
    DELETE_CHARACTER,
    LOADING,
    UPDATE_CHARACTER,
    CLEAR_DATA,
    SET_IMAGE
} from "./actions"

const StoreContext = createContext()
const { Provider } = StoreContext

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case SET_CHARACTER:
            return {
                ...state,
                characters: [...state.characters, {
                    name: action.character,
                    realm: action.realm
                }],
                loading: false
            }
        case DELETE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter((character) => {
                    return character._id !== action._id
                }),
                loading: false
            }
        case CLEAR_DATA:
            return {
                ...state,
                characters: "",
                achievement: "",
                loading: false
            }
        case UPDATE_CHARACTER:
            return {
                ...state,
                characters: [{
                    name: action.name,
                    level: action.level,
                    race: action.race,
                    spec: action.spec,
                    class: action.class,
                    points: action.points
                }],
                loading: false
            };
        case SET_ACHIEVEMENT:
            return {
                ...state,
                achievement: action.achievement,
                loading: false
            }
        case SET_IMAGE:
            return {
                ...state,
                img: action.img
            }
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        characters: []
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext)
}

export { StoreProvider, useStoreContext }