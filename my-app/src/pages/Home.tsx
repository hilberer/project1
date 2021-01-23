import './Home.css'
import { Navigation } from '../components/navigation/Navigation'
import { ToggleButton } from '../hooks/ToggleButton'

export const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <ToggleButton name="hej"> <Navigation /> </ToggleButton>
            <div className="nested">
                <div className="one">1</div>
                <div className="two">2</div>
                <div className="three">3</div>
            </div>
        </div>
    )
}