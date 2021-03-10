import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from './src/middlewares/Middlewares.js'
import Configuration from './configurations/Configuration.js'
import UserRoutes from './src/routes/User.routes.js'
import cors from 'cors'
import PizzaRoutes from './src/routes/Pizza.routes.js'
import IngredientRoutes from './src/routes/Ingredient.routes.js'


const application = express()
application.use(cors({ credentials: true}))
application.use(express.json())
application.use(helmet())
application.use(morgan('common'))


UserRoutes.routes(application)
PizzaRoutes.routes(application)
IngredientRoutes.routes(application)
application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(application)

export default application