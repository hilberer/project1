import './MobileNavigation.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const MobileNavigation = () => {

    const history=useHistory()

    return (
        <div className="mobileNavigationWrapper">
            <span onClick={() => history.push(RoutingPath.home)}>Home</span>
            <span onClick={() => history.push(RoutingPath.signin)}>Login</span>
            <span onClick={() => history.push(RoutingPath.newrecipe)}>New Recipe</span>

        </div>
    )
}
