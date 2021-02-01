import { useState, createContext } from 'react'

export const pizzaContext  = createContext<any>('')

export const PizzaNameProvider = (props: { children: React.ReactChild } ) => {

    const [test, setTest] = useState()
    const { children } = props
    return (
        <pizzaContext.Provider value={[test, setTest]}>
            { children }
        </pizzaContext.Provider>
    )
}
