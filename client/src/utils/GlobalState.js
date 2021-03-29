import React, { createContext, useReducer, useContext } from "react"
import {
    SET_CHARACTER,
    SET_ACHIEVEMENT,
    DELETE_CHARACTER,
    LOADING,
    UPDATE_CHARACTER,
    CLEAR_DATA,
    SET_IMAGE,
    SAVE_ACHIEVEMENT,
    DELETE_ACHIEVEMENT,
    SET_TOKEN
} from "./actions"

const StoreContext = createContext()
const { Provider } = StoreContext

const reducer = (state, action) => {
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
                savedAchievements: "",
                token: "",
                img: "",
                loading: false
            }
        case UPDATE_CHARACTER:
            return {
                ...state,
                characters: [{
                    name: action.name,
                    realm: action.realm,
                    level: action.level,
                    race: action.race,
                    spec: action.spec,
                    class: action.class,
                    points: action.points,
                    faction: action.faction
                }],
                loading: false
            };
        case SET_ACHIEVEMENT:
            return {
                ...state,
                achievement: action.achievement,
                loading: false
            }
        case SAVE_ACHIEVEMENT:
            return {
                ...state,
                savedAchievements: [...state.savedAchievements, {
                    achievement: action.saveAchieve,
                }],
                loading: false
            }
        case DELETE_ACHIEVEMENT:
            return {
                ...state,
                savedAchievements: state.savedAchievements.filter((achievement) => {
                    return achievement.achievement.id !== action.id
                })
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
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
                loading: false
            }
        default:
            return state
    }
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        characters: [],
        savedAchievements: [],
        token: ''
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext)
}

export { StoreProvider, useStoreContext }