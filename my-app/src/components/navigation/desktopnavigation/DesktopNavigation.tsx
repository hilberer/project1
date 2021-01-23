import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import Minilogo from '../../../shared/images/minilogo.png'
import Logo from '../../../shared/images/logo.png'

export const DesktopNavigation = () => {
    const history = useHistory()
    return (
        <div className="desktopNavigationWrapper">

                <img className="navigationLogotype1"
                src={Logo}
                alt={''}
                />
                <span onClick= {() => history.push(RoutingPath.home)}>Home</span>
                <span onClick= {() => history.push(RoutingPath.about)}>About</span>
                <span onClick= {() => history.push(RoutingPath.signin)}>Login</span>
                <span onClick= {() => history.push('/about')}>About</span>
                <img className="navigationLogotype2"
                src={Minilogo}
                alt={''}/>
        </div>
    )
}