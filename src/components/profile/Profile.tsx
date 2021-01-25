import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
    const [authUser, setAuthUser] = useContext(UserContext)

    return (
        <div>
            <img className="Profile"src={'https://thispersondoesnotexist.com/image'} alt={''} />
            {authUser.username}
        </div>
    )
}
