import { useState, useContext} from 'react'
import { Pizza } from '../../../shared/interface/Recipe'
import { pizzaContext } from '../../../shared/provider/PizzaNameProvider'
import { Slider } from '../../../components/slider/Slider'


export const NewRecipe = () => {

    const [createPizza, setCreatePizza] = useState<Pizza>({ name: '', ingredients:[]})
    const [, setTest] = useContext(pizzaContext)


    const createRecipe = () => {

        localStorage.setItem('pizza', createPizza.name)
        setTest(createPizza)

    }
    const handleChange = (value: number) => {
        console.log(value)
    }

    return (
        <div>
            <input
            placeholder="name"
            onChange={event => setCreatePizza({ ...createPizza, name: event.target.value})}
            ></input>
            <button onClick={() => createRecipe()}>Create</button>
            <button>Save</button>
            <h1>{ createPizza.name }</h1>
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
