import axios from 'axios'

export const getCatApi = () => axios.get('https://api.thecatapi.com/v1/images/search')