import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { SignInView } from '../pages/SignInView'
import RoutingPath from './RoutingPath'


export const Routes = (props: { children: React.ReactChild}) => {
    const { children } = props

    return (
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={RoutingPath.home} component={Home} />
                <Route exact path={RoutingPath.about} component={About} />
                <Route exact path={RoutingPath.signin} component={SignInView} />
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    )
}