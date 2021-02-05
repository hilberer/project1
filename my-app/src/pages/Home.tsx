import './Home.css'
import { AddButton } from '../components/addbutton/AddButton'



export const Home = () => {



    return (
        <div className="homeWrapper">
            <AddButton />
            <div className="one"></div>
            <div className="two">2</div>
            <div className="three">3</div>

        </div>
    )
}