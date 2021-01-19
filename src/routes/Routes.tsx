import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'


export const Routes = (props: { children: React.ReactChild}) => {
    const { children } = props

    return (
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={'/home'} component={Home} />
                <Route exact path={'/about'} component={About} />
            </Switch>
        </BrowserRouter>
    )
}