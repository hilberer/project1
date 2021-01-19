import './Home.css'
import { Navbar } from '../components/navbar/Navbar'

export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="nested">
                <div className="one">1</div>
                <div className="two">2</div>
                <div className="three">3</div>
            </div>
        </div>
    )
}