import { useState, useEffect } from 'react'
import { iCreateNewIngredient } from '../../../shared/interface/Interface'
import BackendAPIIngredient from '../../../shared/api/service/BackendAPIIngredient'
import './AddIngredient.css'
import { Slider } from '../../../components/slider/Slider'

export const AddIngredient = () => {
    const [newIngredient, setNewIngredient] = useState<iCreateNewIngredient>({name: '', type: ''})
    const [loading, ] = useState(false)
    const [ingredients, setIngredients] = useState<Array<iCreateNewIngredient>>([])

    const ingredient = async () => {

        console.log(newIngredient)
        if (!doesIngredientNameExist(newIngredient)) {
            try {
                const response = BackendAPIIngredient.createIngredient(newIngredient)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('You must have a name for the ingredient!')
            console.log('Ingredient has no name')
        }
    }
    const doesIngredientNameExist = (ingredient: iCreateNewIngredient): boolean => {
        return ingredient.name === ''
    }
    const fetchIngredients = async () => {
        const response = await BackendAPIIngredient.getAllIngredients()
        setIngredients(response.data)
    }

    useEffect(() => {
        fetchIngredients()
    },[loading])

    const handleChange = (value: number, name: string) => {
        let array: Array<iCreateNewIngredient> = [...ingredients]
        for (let i of array) {
            if(i.name === name) {
                i.quantity = value
                setIngredients(array)
                console.log(i.name + ' ' + i.type + ' updated with ' + value)
                return
            }
        }
        console.log('error in for loop')
    }
    return (
        <div>
           <br/>
           <p>NAME</p>
           <input placeholder="name" onChange={(event) => setNewIngredient({ ...newIngredient, name: event.target.value})}></input>
           <p>TYPE</p>
           <select onChange={event => setNewIngredient({ ...newIngredient, type: event.target.value})}>
               <option>Cheese</option>
               <option>Meat</option>
               <option>Vegetable</option>
               <option>Sauce</option>
           </select>
           <br/>
           <button onClick={() => ingredient()}>create</button>
           <button onClick={() => fetchIngredients()}>Show Ingredients</button>
                {ingredients.map((x: any) =>
                    <div key={x._id} className={x.type}>
                        <span>{x.name}</span>
                        <Slider min={0} max={100} step={10} value={0} onChangeValue={ (value: number) => {handleChange(value, x.name)}} defaultLength={100}/>
                    </div>)}
        </div>
    )
}
