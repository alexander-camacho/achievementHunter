import React from "react"
import SearchForm from "../components/SearchForm"
import { useStoreContext } from "../utils/GlobalState"


const Home = () => {


        return (<div className="container">
            <h1>Welcome to Random Achievement Hunter</h1>
            <p>Please enter your character's name and server below to get started!</p>

            <SearchForm/>


        </div>
        )
    }


export default Home