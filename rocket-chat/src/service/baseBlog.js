import axios from 'axios'

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000
}

const protocolo = axios.create(config)

export function getCard() {
    const url = '/posts'
    return protocolo.get(url)
} 