himport axios from 'axios'

const instance = axios.create({
  baseURL: "/api",
  timeout: 30000,
})


export default instance

