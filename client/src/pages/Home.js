import React, { Component } from "react"
import SearchForm from "../components/SearchForm"




class Home extends Component {

    state = {
        realm: "",
        character: ""
    }

    handleRealm = event => {
        this.setState({
            realm: String(event.target.value).toLowerCase()
        });
    };

    handleChar = event => {
        this.setState({
            character: String(event.target.value).toLowerCase()
        });
    };

    handleFormSubmit = event => {
        event.preventDefault()
        console.log(`Character: ${this.state.character}`)
        console.log(`Realm: ${this.state.realm}`)

    }

    render() {

        return (<div className="container">
            <h1>Welcome to Random Achievement Hunter</h1>
            <p>Please enter your character's name and server below to get started!</p>

            <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleRealm={this.handleRealm}
                handleChar={this.handleChar}
            />


        </div>
        )
    }

}

export default Home