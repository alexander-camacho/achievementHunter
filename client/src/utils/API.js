import axios from "axios"
const url = "https://us.api.blizzard.com/profile/wow/character"

const urlTwo = "?namespace=profile-us&locale=en_US&access_token="
export default {

    getToken: function () {
        return axios.get(`/token`)
    },

    getAchievements: function (realm, character, token) {
        return axios.get(`${url}/${realm.toLowerCase().trim()}/${character.toLowerCase().trim()}/achievements${urlTwo}${token}`)
    },
    getCharacter: function (realm, character, token) {
        return axios.get(`${url}/${realm.toLowerCase().trim()}/${character.toLowerCase().trim()}${urlTwo}${token}`)
    },
    getImg: function (realm, character, token) {
        return axios.get(`${url}/${realm.toLowerCase().trim()}/${character.toLowerCase().trim()}/character-media${urlTwo}${token}`)
    }
}