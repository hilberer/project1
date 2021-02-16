/* import Axios from 'axios' */
import { useState, useEffect, useContext } from 'react'
import StarwarsAPIService from '../../../shared/api/service/StarwarsAPIService'
import { StarwarsCharContext } from '../../../shared/provider/StarwarsCharProvider'


export const AddIngredient = () => {
    const [starwarsData, setStarwarsData] = useState<any>()
    const [count, setCount] = useState(1)
    const [char, setChar] = useContext(StarwarsCharContext)

    const makeSureCountWillNeverGoBelowValue1 = () => {
        (count <= 1) ? setCount(1) : setCount(count - 1)
    }

/*     const getDataFromStarWarsAPI = () => {
        Axios.get(`https://swapi.dev/api/people/${count}/`)
        .then(response => setStarwarsData(response))
        .catch(error => console.log(error))
    } */

    const getDataFromStarWarsAPI2 = async () => {
        try {
            const response = await StarwarsAPIService.getStarWarsCharacter(count)
            setStarwarsData(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataFromStarWarsAPI2()
        console.log(char)
    }, [count])

/*     const saveChar = () => {
        setChar(starwarsData)
    } */

    return (
        <div>
           <h1>Name: {starwarsData?.data?.name}</h1>
           <h1>Hair Color: {starwarsData?.data?.hair_color}</h1>
           <h1>Gender: {starwarsData?.data?.gender}</h1>
           <h1>Birth year: {starwarsData?.data?.birth_year}</h1>
           <h1>Height: {starwarsData?.data?.height}</h1>
           <button onClick={() => makeSureCountWillNeverGoBelowValue1()}>Get previous character</button>
           <button onClick={() => setCount(count + 1)}>Get next character</button>
           <button onClick={() => setChar(starwarsData.data)}>Save Character</button>
        </div>
    )
}
