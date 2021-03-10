import mongoose from 'mongoose'
const {Schema} = mongoose

const pizzaSchema = Schema ({
    name: {
        type: String,
        unique: true,
        required: true
    },
    cheese: {
        type: Number,
        required: false
    }
},{ timestamps: true })

const PizzaModel = mongoose.model('pizza', pizzaSchema)
export default PizzaModel