import IngredientModel from '../models/Ingredient.model.js'
import StatusCode from '../../configurations/StatusCode.js'


export const createIngredient = async (request, response) => {
    const ingredient = new IngredientModel({
        name: request.body.name,
        type: request.body.type
    })
    try {
        const databaseResponse = await ingredient.save()
        response.status(StatusCode.CREATED).send(databaseResponse)
    } catch(error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to create ingredient',
            stack: error
        })
    }
}

const getAllIngredients = async (request, response) => {
    try {
        const databaseResponse = await IngredientModel.find()
        response.status(StatusCode.OK).send(databaseResponse)
    } catch(error) {
        response.status(500).send({ message: error.message })
    }
}

const deleteIngredient = async (request, response) => {
    try {
        const ingredientId = request.params.ingredientId
        const databaseResponse = await IngredientModel.findByIdAndDelete(request.params.ingredientId)
        response.status(StatusCode.OK).send({message: 'Sucessfully deleted ingredient', data: databaseResponse})
    } catch(error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to delete ingredient with id ${ingredientId}`,
            error: error.message
        })
    }
}
export default {
    createIngredient,
    deleteIngredient,
    getAllIngredients
}