import './DesktopNavigationTabs.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigationTabs = () => {

    const history = useHistory()
    return (
        <ul className="ulTabsWrapper">

                <li className="liTabs" onClick= {() => history.push(RoutingPath.home)}>Home</li>
                <li className="liTabs" onClick= {() => history.push(RoutingPath.addingredient)}>Add Ingredient</li>
                <li className="liTabs" onClick= {() => history.push(RoutingPath.newrecipe)}>New Recipe</li>
                <li className="liTabs" onClick= {() => history.push(RoutingPath.testapi)}>Test API</li>

        </ul>
    )
}
