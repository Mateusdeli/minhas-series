import axios from 'axios'

const apiKey = "f0a0ab567c15d85092de4806e0165ed3"
const baseURL = `https://api.themoviedb.org/3/`

const httpClient = axios.create({
    baseURL
})

httpClient.defaults.params = {
    "api_key": apiKey
}

export default httpClient