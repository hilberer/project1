import PizzaController from '../controllers/Pizza.controller.js'

const routes = (application) => {
    application.post('/newrecipe', PizzaController.createPizza)
    application.get('/newrecipe', PizzaController.getAllRecipes)
    application.delete('/newrecipe/:pizzaId', PizzaController.deleteRecipe)
}

export default { routes }