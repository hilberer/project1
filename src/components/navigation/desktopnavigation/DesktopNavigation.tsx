import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import Minilogo from '../../../shared/images/minilogo.png'
import Logo from '../../../shared/images/logo.png'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'

export const DesktopNavigation = () => {
    const history = useHistory()
    const [authUser, setAuthUser] = useContext(UserContext)

    const displaySignInButtonOrUserNameDependingOnAuthentication = () => {
        return authUser
            ? <Profile />
            : <span onClick= {() => history.push(RoutingPath.signin)}>Login</span>
    }

    return (
        <div className="desktopNavigationWrapper">

                <img className="navigationLogotype1"
                src={Logo}
                alt={''}
                />
                <span onClick= {() => history.push(RoutingPath.home)}>Home</span>
                <span onClick= {() => history.push(RoutingPath.about)}>About</span>
                <span onClick= {() => history.push('/about')}>About</span>
                <img className="navigationLogotype2"
                src={Minilogo}
                alt={''}/>
                {displaySignInButtonOrUserNameDependingOnAuthentication()}
        </div>
    )
}