import { useState, useContext} from 'react'
import { pizzaName } from '../../../shared/interface/Recipe'
import { pizzaContext } from '../../../shared/provider/PizzaNameProvider'


export const NewRecipe = () => {

    const [createPizza, setCreatePizza] = useState<pizzaName>({ pizza: ''})
    const [, setTest] = useContext(pizzaContext)


    const createRecipe = () => {

        localStorage.setItem('pizza', createPizza.pizza)
        setTest(createPizza)

    }

    return (
        <div>
            <input
            placeholder="name"
            onChange={event => setCreatePizza({ ...createPizza, pizza: event.target.value})}
            ></input>
            <button onClick={() => createRecipe()}>Create</button>
            <button>Save</button>
            <h1>{ createPizza.pizza }</h1>
        </div>
    )
}
