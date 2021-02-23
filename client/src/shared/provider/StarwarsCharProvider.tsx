import { useState, createContext } from 'react'
import { StarwarsChar } from '../interface/StarwarsChar'

export const StarwarsCharContext = createContext<any>('')

export const StarwarsCharProvider = (props: { children: React.ReactChild } ) => {

    const [char, setChar] = useState<StarwarsChar>({name:'', hair_color:'', birth_year: '', height: 0})
    const { children } = props
    return (
        <StarwarsCharContext.Provider value={ [char, setChar] }>
            { children }
        </StarwarsCharContext.Provider>
    )
}