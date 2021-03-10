import http from '../BackendAPI'
import { iCreateNewRecipe } from '../../interface/Interface'

const createRecipe = async (data: iCreateNewRecipe) => {
    try {
        return await http.post('/newrecipe', data)
    } catch(error) {
        console.log(error)
    }
    return {data: []}
}

const getAllRecipes = async () => {

    try {
        return await http.get('/newrecipe')

    } catch (error) {
        console.log(error)
    }
    return {data: []}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createRecipe,
    getAllRecipes
}