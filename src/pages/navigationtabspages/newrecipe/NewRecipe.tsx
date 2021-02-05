import { useState, useContext} from 'react'
import { Pizza } from '../../../shared/interface/Recipe'
import { pizzaContext } from '../../../shared/provider/PizzaNameProvider'


export const NewRecipe = () => {

    const [createPizza, setCreatePizza] = useState<Pizza>({ name: '', ingredients:[]})
    const [, setTest] = useContext(pizzaContext)


    const createRecipe = () => {

        localStorage.setItem('pizza', createPizza.name)
        setTest(createPizza)

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
        </div>
    )
}
