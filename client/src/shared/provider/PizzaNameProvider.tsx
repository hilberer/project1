import { useState, createContext } from 'react'
import { Pizza } from '../interface/Recipe'

export const pizzaContext  = createContext<any>('')

export const PizzaNameProvider = (props: { children: React.ReactChild } ) => {

    const [pizzas, setPizzas] = useState<Array<Pizza>>([])
    const { children } = props
    return (
        <pizzaContext.Provider value={[pizzas, setPizzas]}>
            { children }
        </pizzaContext.Provider>
    )
}
