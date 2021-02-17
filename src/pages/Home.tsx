import './Home.css'
import { AddButton } from '../components/addbutton/AddButton'
import { Slider } from '../components/slider/Slider'
import { useContext } from 'react'
import { pizzaContext } from '../shared/provider/PizzaNameProvider'
import { Pizza } from '../shared/interface/Recipe'
import { StarwarsCharContext } from '../shared/provider/StarwarsCharProvider'



export const Home = () => {
const [pizzas, setPizzas] = useContext<any>(pizzaContext)
const [char, setChar] = useContext<any>(StarwarsCharContext)
const handleChange = (value: number) => {
    console.log(value)
}
const displayData = () => {
    return (
        <div>
            {pizzas.map((x: Pizza) => <div><h1>{x.name}</h1></div>)}
        </div>
    )
}

    return (
        <div className="homeWrapper">
            <AddButton />
            <Slider min={0} max={100} step={10} value={50} onChangeValue={handleChange} defaultLength={100}/>
            {displayData()}
            <h1>{char.name}</h1>
            <h1>{char.birth_year}</h1>
            <h1>{char.hair_color}</h1>
            <h1>{char.height}</h1>

        </div>
    )
}