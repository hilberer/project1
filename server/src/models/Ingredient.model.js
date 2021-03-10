import mongoose from 'mongoose'
const {Schema} = mongoose

const ingredientSchema = Schema ({
    name: {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String,
        required: true
    }
},{ timestamps: true })

const IngredientModel = mongoose.model('ingredient', ingredientSchema)
export default IngredientModel