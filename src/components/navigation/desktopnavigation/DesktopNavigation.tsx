import './DesktopNavigation.css'
import Logotype from '../../../shared/images/logotype.png'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
    const history = useHistory()
    return (
        <div className="desktopNavigationWrapper">
            <img className="navigationLogotype"
                src={Logotype}
                alt={''}/>
                <span onClick= {() => history.push(RoutingPath.home)}>Home</span>
                <span onClick= {() => history.push(RoutingPath.about)}>About</span>
                <span onClick= {() => history.push(RoutingPath.signin)}>Login</span>
                <span onClick= {() => history.push('/about')}>About</span>
        </div>
    )
}
