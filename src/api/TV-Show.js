import axios from "axios"
import { FAKES, FAKE_REC } from "./Fakes"
import { BASE_URL, BACKDROPBADE_URL } from "./Config"

export class TVShowAPI {
    static async fetchPopulars() {
        //axios always stores the response in .data/await since its asynchrone
        const response = await axios.get(`${BASE_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`)
        console.log(response.data.results)
        return response.data.results
        //return FAKES
    };
    static async fetchRecommendations(tvShowID) {
        //axios always stores the response in .data/await since its asynchrone
        const response = await axios.get(`${BASE_URL}tv/${tvShowID}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`)
        console.log(response.data.results)
        return response.data.results
        //return FAKE_REC
    };
    static async fetchByTitle(title) {
        //axios always stores the response in .data/await since its asynchrone
        const response = await axios.get(
            `${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`)
        console.log(response.data.results)
        return response.data.results
        //return FAKE_REC
    }
} 