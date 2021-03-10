import PizzaModel from '../models/Pizza.model.js'
import StatusCode from '../../configurations/StatusCode.js'


const createPizza = async (request, response) => {

    const pizza = new PizzaModel({
        name: request.body.name,
        cheese: request.body.cheese
    })

    try {
        const databaseResponse =  await pizza.save()
        response.status(StatusCode.CREATED).send(databaseResponse)

    } catch(error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to create pizza',
            stack: error
        })
    }
}

const getAllRecipes = async (request, response) => {
    try {
        const databaseResponse = await PizzaModel.find()
        response.status(StatusCode.OK).send(databaseResponse)
    } catch(error) {
        response.status(500).send({ message: error.message })
    }
}

const deleteRecipe = async (request, response) => {
    try {
        const pizzaId = request.params.pizzaId
        const databaseResponse = await PizzaModel.findByIdAndDelete(request.params.pizzaId)
        response.status(StatusCode.OK).send({message: 'Sucessfully deleted recipe', data: databaseResponse})
    } catch(error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to delete recipe with id ${pizzaId}`,
            error: error.message
        })
    }
}

export default {
    createPizza,
    getAllRecipes,
    deleteRecipe
}
