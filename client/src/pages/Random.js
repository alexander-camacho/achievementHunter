import React, { Component } from "react"
import achievements from "../achievements"
import RandomBtn from "../components/RandomBtn"
import AchieveBanner from "../components/AchieveBanner"
import PlayerCard from "../components/PlayerCard"

class Random extends Component {

    state = {
        achievement: {},

    }

    // Load a random achievement when the component first mounts.
    componentDidMount() {
        this.handleGetRandom(this.incomplete)
    }

    allAchieves = (achievements[0].achievements)
    incomplete = []

    checkComplete = (array) => {
        for (var i = 0; i < array.length; i++) {
            if (!array[i].completed_timestamp) {
                this.incomplete.push(array[i])
            }
        }
    }
    
    handleGetRandom = (array) => {
        this.checkComplete(this.allAchieves)
        const randomAchieve = array[Math.floor(Math.random() * array.length)]
        this.setState({
            achievement: {
                randomAchieve
            }
        })
    }
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col md-6">
                        <PlayerCard />
                    </div>
                    <div className="col md-6">
                        <RandomBtn onClick={() => (this.handleGetRandom(this.incomplete))} />
                        <AchieveBanner data={this.state.achievement} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Random