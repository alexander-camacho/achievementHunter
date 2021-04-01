import React, { useEffect } from "react"
import SearchForm from "../components/SearchForm"
import { CLEAR_DATA, LOADING, SET_TOKEN } from "../utils/actions"
import API from "../utils/API"
import { useStoreContext } from "../utils/GlobalState"


const Home = () => {

    const [state, dispatch] = useStoreContext()

    async function newToken() {
        await API.getToken()
        .then(res =>
            dispatch({
                type: SET_TOKEN,
                token: res.data.token

            })
    )
}

    useEffect(() => {
        dispatch({ type: LOADING })
        dispatch({ type: CLEAR_DATA })
        newToken()
    }, [])

    return (<div className="container">
        <h1>Welcome to Random Achievement Hunter</h1>
        <p>Please enter your character's name and server below to get started!</p>

        <SearchForm />


    </div>
    )
}


export default Home