import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import Minilogo from '../../../shared/images/minilogo.png'
import Logo from '../../../shared/images/logo.png'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import { DesktopNavigationTabs } from '../desktopnavigationtabs/DesktopNavigationTabs'

export const DesktopNavigation = () => {
    const history = useHistory()
    const [authUser, ] = useContext(UserContext)

    const displaySignInButtonOrUserNameDependingOnAuthentication = () => {
        return authUser
            ? <div className="profile"><Profile /></div>
            : <span className="signInButton" onClick= {() => history.push(RoutingPath.signin)}>Login</span>
    }

    return (
        <div className="desktopNavigationWrapper">

                <img className="navigationLogotype1"
                src={Logo}
                alt={''}
                />
                <div className="desktopNavigationTabs">
                    <DesktopNavigationTabs />
                </div>
                {displaySignInButtonOrUserNameDependingOnAuthentication()}
                <img className="navigationLogotype2"
                src={Minilogo}
                alt={''}/>
        </div>
    )
}