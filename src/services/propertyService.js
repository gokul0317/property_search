import axios from 'axios'

const BASE_URL = 'https://carolineolds-strapi-dev.q.starberry.com'
const LIMIT = '_limit'

export async function getPropertyList({ limit }) {
    return await axios.get(`${BASE_URL}/properties?${LIMIT}=${limit}`)
}