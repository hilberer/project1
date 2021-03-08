import Axios from 'axios'

const BackendAPI = Axios.create({
    baseURL: 'http://localhost:3002', headers: {'Content-Type': 'application/json'}
})

export default BackendAPI