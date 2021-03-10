import IngredientController from '../controllers/Ingredient.controller.js'

const routes = (application) => {
    application.post('/addingredient', IngredientController.createIngredient)
    application.delete('/addingredient/:ingredientId', IngredientController.deleteIngredient)
    application.get('/addingredient', IngredientController.getAllIngredients)
}

export default { routes }