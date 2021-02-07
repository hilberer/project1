import './Home.css'
import { AddButton } from '../components/addbutton/AddButton'
import { Slider } from '../components/slider/Slider'



export const Home = () => {

const handleChange = (value: number) => {
    console.log(value)
}

    return (
        <div className="homeWrapper">
            <AddButton />
            <Slider min={0} max={100} step={10} value={50} onChangeValue={handleChange} defaultLength={100}/>
            <div className="one"></div>
            <div className="two">2</div>
            <div className="three">3</div>

        </div>
    )
}