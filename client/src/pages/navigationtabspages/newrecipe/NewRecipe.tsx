import { useState, useContext, useEffect} from 'react'
import { Ingredient, Pizza } from '../../../shared/interface/Recipe'
import { pizzaContext } from '../../../shared/provider/PizzaNameProvider'
import { Slider } from '../../../components/slider/Slider'
import './NewRecipe.css'


export const NewRecipe = () => {

    const [createPizza, setCreatePizza] = useState<Pizza>({ name: '', ingredients:[]})
    const [pizzas, setPizzas] = useContext(pizzaContext)
    const [mushroom, setMushroom] = useState<Ingredient>({name:'mushroom ', quantity: 0})
    const [cheese, setCheese] = useState<Ingredient>({name: 'cheese ', quantity: 0})
    const [onion, setOnion] = useState<Ingredient>({name: 'onion ', quantity: 0})
    const [ham, setHam] = useState<Ingredient>({name: 'Ham ', quantity: 0})

/*
    const handleChange = (value: number) => {
        console.log(value)
    } */

    const handleMushroom = (value: number) => {
        setMushroom({ ...mushroom, quantity: value })
    }
    const handleCheese = (value: number) => {
        setCheese({...cheese, quantity: value})
    }
    const handleOnion = (value: number) => {
        setOnion({...onion, quantity: value})
    }
    const handleHam = (value: number) => {
        setHam({...ham, quantity: value})
    }

    const handleClick = () => {
        if (createPizza === undefined || createPizza.ingredients === undefined) {return}
        createPizza.ingredients = new Array<Ingredient>()
        createPizza.ingredients.push(mushroom)
        createPizza.ingredients.push(cheese)
        createPizza.ingredients.push(onion)
        createPizza.ingredients.push(ham)
        setPizzas(pizzas.concat(createPizza)); alert('Recipe created')
    }

    useEffect(() => {
        console.log(pizzas)
    },[pizzas])


    return (
        <div>
            <input
            placeholder="name"
            onChange={ (event) => setCreatePizza({...createPizza, name: event.target.value})} />
            <button className="button-Create" onClick={handleClick}>Create</button>
            <button className="button-Save">Save</button>
            <br/>
            <label>Cheese</label>
            <Slider min={0} max={100} step={10} value={0} onChangeValue={handleCheese} defaultLength={100}/>
            <label>Mushroom</label>
            <Slider min={0} max={100} step={10} value={0} onChangeValue={handleMushroom} defaultLength={100}/>
            <label>Onion</label>
            <Slider min={0} max={100} step={10} value={0} onChangeValue={handleOnion} defaultLength={100}/>
            <label>Ham</label>
            <Slider min={0} max={100} step={10} value={0} onChangeValue={handleHam} defaultLength={100}/>

        </div>
    )
}
