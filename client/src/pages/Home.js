import React, { useEffect } from "react"
import SearchForm from "../components/SearchForm"
import { CLEAR_DATA, LOADING } from "../utils/actions"
import { useStoreContext } from "../utils/GlobalState"


const Home = () => {

    const [state, dispatch] = useStoreContext()

    useEffect(() => {
        dispatch({ type: LOADING })
        dispatch({ type: CLEAR_DATA })
    }, [])

        return (<div className="container">
            <h1>Welcome to Random Achievement Hunter</h1>
            <p>Please enter your character's name and server below to get started!</p>

            <SearchForm/>


        </div>
        )
    }


export default Home