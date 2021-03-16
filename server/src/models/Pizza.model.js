import mongoose from 'mongoose'
const {Schema} = mongoose

const pizzaSchema = Schema ({
    name: {
        type: String,
        unique: true,
        required: true
    },

    ingredients: {
        type: Array,
        required: false
    }
},{ timestamps: true })

const PizzaModel = mongoose.model('pizza', pizzaSchema)
export default PizzaModel