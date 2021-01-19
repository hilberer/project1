import './Home.css'
import { Navbar } from '../components/navbar/Navbar'

export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <h1>Homepage</h1>
        </div>
    )
}