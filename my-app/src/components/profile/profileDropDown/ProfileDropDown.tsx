import './ProfileDropDown.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'


export const ProfileDropDown = () => {
    const history = useHistory()
    const [, setAuthUser] = useContext(UserContext)

    const logout = () => {

        setAuthUser(false)
        localStorage.removeItem('credentials')
        history.push(RoutingPath.home)

    }

    return (
        <div className="profileDropdown">
                <span>alternativ 1</span>
                <span>alternativ 2</span>
                <span>alternativ 3</span>
                <span onClick={() => logout()}>Log out</span>
        </div>
    )
}
