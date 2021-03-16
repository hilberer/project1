import mongoose from 'mongoose'
const {Schema} = mongoose

const ingredientTypeSchema = Schema ({
    type: {
        type: Array<String>[]
    }
})
const IngredientTypeModel = mongoose.model('ingredientType', ingredientTypeSchema)
export default IngredientTypeModel

