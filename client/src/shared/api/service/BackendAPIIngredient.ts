import http from '../BackendAPI'
import { iCreateNewIngredient } from '../../interface/Interface'

const createIngredient = async (data: iCreateNewIngredient) => {
    try {
        return await http.post('/addingredient', data)
    } catch(error) {
        console.log(error)
    }
    return {data: []}
}
const getAllIngredients = async () => {
    try {
        return await http.get('/addingredient')
    } catch(error) {
        console.log(error)
    }
    return {data: []}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createIngredient,
    getAllIngredients
}