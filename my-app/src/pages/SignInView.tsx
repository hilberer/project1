import { useState } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const SignInView = () => {

    const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: '', password: ''})
    const history = useHistory()

    const signIn = () => {
        history.push(RoutingPath.home)
        localStorage.setItem('user', loginCredentials.username)
    }

    return (
        <div>

            <h1>{loginCredentials.username}</h1>
            <form>
                <input
                placeholder='username'
                onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value})}/> <br/>
                <input
                placeholder='password'
                onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value})}
                />
                <button onClick={() => signIn()}>Sign in</button>
            </form>
        </div>
    )
}
