import axios from "axios"
import { FAKES, FAKE_REC } from "./Fakes"
import { BASE_URL, API_KEY_PARAM, BACKDROPBADE_URL } from "./Config"

export class TVShowAPI {
    static async fetchPopulars() {
        //axios always stores the response in .data/await since its asynchrone
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        console.log(response.data.results)
        return response.data.results
        //return FAKES
    };
    static async fetchRecommendations(tvShowID) {
        //axios always stores the response in .data/await since its asynchrone
        const response = await axios.get(`${BASE_URL}tv/${tvShowID}/recommendations${API_KEY_PARAM}`)
        console.log(response.data.results)
        return response.data.results
        //return FAKE_REC
    };
    static async fetchByTitle(title) {
        //axios always stores the response in .data/await since its asynchrone
        const response = await axios.get(
            `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`)
        console.log(response.data.results)
        return response.data.results
        //return FAKE_REC
    }
} 