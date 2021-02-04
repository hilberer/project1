import './SideBar.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'

export const SideBar = (props: {drawerIsOpen: boolean, drawerHandler: Function}) => {

    const history=useHistory()
    const handleRedirect = (selectedPage: string) => {
        history.push(selectedPage)
        props.drawerHandler(false)
    }
    return (
        <div className={props.drawerIsOpen ? 'side-drawer open': 'side-drawer'}>
            <button className="sidebarButton" onClick={()=>props.drawerHandler(false)}></button>

            <ul className="sidebarMenu">
                <li onClick={() => handleRedirect(RoutingPath.home)}>Home</li>
                <li onClick={() => handleRedirect(RoutingPath.newrecipe)}>New Recipe</li>
                <li onClick={() => handleRedirect(RoutingPath.addingredient)}>Add Ingredient</li>
            </ul>


        </div>
    )
}
