import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'

const application = express()
application.use(helmet())
application.use(morgan('common'))

const checkIfAdmin = (request, response, next) => {
    console.log(request.query.beverage)
    next()
}

application.use(checkIfAdmin)

application.get('/recipe', checkIfAdmin, (request, response) => {
    response.send('Ditt API anrop gick igenom!')
})

application.get('/throwdice', (request, response) => {
    response.send(Math.random().toString())
})

mongoose.connect('mongodb://localhost/namndb', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('SUCCESFULLY CONNECTED TO DATABASE'))
    .catch((error) => {
        console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ' + error)
        process.exit()
    })
application.listen(3001, () => {
    console.log('Server är igång på port ' + 3001)
})