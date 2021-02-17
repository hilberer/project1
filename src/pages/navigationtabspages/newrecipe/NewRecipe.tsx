import { useState, useContext} from 'react'
import { Pizza } from '../../../shared/interface/Recipe'
import { pizzaContext } from '../../../shared/provider/PizzaNameProvider'
import { Slider } from '../../../components/slider/Slider'
import './NewRecipe.css'


export const NewRecipe = () => {

    const [createPizza, setCreatePizza] = useState<Pizza>({ name: '', ingredients:[]})
    const [pizzas, setPizzas] = useContext(pizzaContext)


/*     const createRecipe = () => {

        localStorage.setItem('pizza', createPizza.name)
        setTest(createPizza)

    } */
    const handleChange = (value: number) => {
        console.log(value)
    }
    console.log(pizzas)

    return (
        <div>
            <input
            placeholder="name"
            onChange={ (event) => setCreatePizza({...createPizza, name: event.target.value})} />
            <button className="button-Create" onClick={() => {setPizzas(pizzas.concat(createPizza)); alert('Recipe created')}}>Create</button>
            <button className="button-Save">Save</button>
            <br/>
            <label>Cheese</label>
            <Slider min={0} max={100} step={10} value={0} onChangeValue={handleChange} defaultLength={100}/>
            <label>Mushroom</label>
            <Slider min={0} max={100} step={10} value={0} onChangeValue={handleChange} defaultLength={100}/>
            <label>Onion</label>
            <Slider min={0} max={100} step={10} value={0} onChangeValue={handleChange} defaultLength={100}/>
            <label>Ham</label>
            <Slider min={0} max={100} step={10} value={0} onChangeValue={handleChange} defaultLength={100}/>

        </div>
    )
}
