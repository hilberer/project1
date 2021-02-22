import { useState, useContext } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import './SignInView.css'

export const SignInView = () => {

    const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: '', password: ''})
    const history = useHistory()
    const [, setAuthuser] = useContext(UserContext)

    const signIn = () => {

        localStorage.setItem('credentials', JSON.stringify(loginCredentials))
        setAuthuser(loginCredentials)
        history.push(RoutingPath.home)

    }


    return (
        <div className="loginWrapper">
            <form className="loginForm">
                <input
                placeholder='username'
                onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value})}/> <br/>
                <input
                placeholder='password'
                onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value})}
                />
                <button className="loginButton" onClick={() => signIn()}>Sign in</button>
            </form>
        </div>
    )
}
