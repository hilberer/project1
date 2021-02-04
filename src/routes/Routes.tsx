import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignInView } from '../pages/SignInView'
import { NewRecipe } from '../pages/navigationtabspages/newrecipe/NewRecipe'
import { AddIngredient } from '../pages/navigationtabspages/addingredient/AddIngredient'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'
import { loginCredentials } from '../shared/interface/Interface'


export const Routes = (props: { children: React.ReactChild}) => {
    const [, setAuthUser] = useContext(UserContext)
    const { children } = props

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
                <Route exact path={RoutingPath.signin} component={SignInView} />
                <Route exact path={RoutingPath.newrecipe} component={NewRecipe} />
                <Route exact path={RoutingPath.addingredient} component={AddIngredient} />
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    )
}