import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignInView } from '../pages/SignInView'
import { NewRecipe } from '../pages/navigationtabspages/newrecipe/NewRecipe'
import { AddIngredient } from '../pages/navigationtabspages/addingredient/AddIngredient'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import { SettingsView } from '../pages/authenticatedpages/SettingsView'
import { TestApiView } from '../pages/navigationtabspages/testapi/TestApiView'


export const Routes = (props: { children: React.ReactChild}) => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const { children } = props

    const blockRouteIfAuthenticated = (allowedView: React.FC, notAllowedView: React.FC) => {
        return !authUser ? allowedView : notAllowedView
    }

/*     const authenticationRequired = (allowed: React.FC, notAllowed: React.FC) => {
        return authUser ? allowed : notAllowed
    } */
    useEffect(() => {

        if (localStorage.getItem('credentials')){
             setAuthUser(() => {
                const storage = localStorage.getItem('credentials')
                if(storage === null){
                    return {username: '', password: ''}
                }
                const user: loginCredentials = JSON.parse(storage)
                return user

            })
        }
    }, [setAuthUser])

    return (
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={RoutingPath.home} component={Home} />
                <Route exact path={RoutingPath.signin} component={blockRouteIfAuthenticated(SignInView, Home)} />
                <Route exact path={RoutingPath.newrecipe} component={NewRecipe} />
                <Route exact path={RoutingPath.addingredient} component={AddIngredient} />
                {/* <Route component={Home} /> */}
                <Route exact path={RoutingPath.settingsView} component={SettingsView} />
                <Route exact path = {RoutingPath.testapi} component={TestApiView} />
            </Switch>
        </BrowserRouter>
    )
}