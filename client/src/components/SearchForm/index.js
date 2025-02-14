import React, { useRef } from "react"
import { useStoreContext } from "../../utils/GlobalState"
import { SET_CHARACTER } from "../../utils/actions"
import { useHistory, withRouter } from 'react-router-dom'
import API from "../../utils/API"


function SearchForm() {
    const realmRef = useRef()
    const charRef = useRef()
    const [state, dispatch] = useStoreContext()
    let history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({
            type: SET_CHARACTER,
            character: charRef.current.value,
            realm: realmRef.current.value
        })
        if (state.characters[0] !== null) {
            history.push('/random')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="myRealm">Realm</label>
                <input
                    id="myRealm"
                    type="text"
                    placeholder="Realm Name"
                    required ref={realmRef}
                ></input>
                <br></br>
                <label htmlFor="myChar">Character</label>
                <input
                    id="myChar"
                    type="text"
                    placeholder="Character Name"
                    required ref={charRef}
                ></input>
                <br></br>
                <button>Submit</button>
            </div>
        </form>
    )
}


export default withRouter(SearchForm)