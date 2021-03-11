import React from "react"

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="myRealm">Realm</label>
                <input 
                id="myRealm" 
                type="text" 
                placeholder="Realm Name"
                onChange={props.handleRealm}></input>
                <br></br>
                <label htmlFor="myChar">Character</label>
                <input 
                id="myChar" 
                type="text"
                placeholder="Character Name"
                onChange={props.handleChar}></input>
                <br></br>
                <button onClick={props.handleFormSubmit}>Submit</button>
                <button href="/auth/bnet">Login</button>
            </div>
        </form>
    )
}


export default SearchForm