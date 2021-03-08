import http from '../BackendAPI'
import { iCreateNewUser } from '../../interface/Interface'

const createUser = async (data: iCreateNewUser) => {
    try {
        return await http.post('/user', data)
    } catch (error) {
        console.log(error)
    }
    return {data: []}
}
const getAllUsers = async () => {

    try {
        return await http.get('/user')

    } catch (error) {
        console.log(error)
    }
    return {data: []}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createUser,
    getAllUsers
}