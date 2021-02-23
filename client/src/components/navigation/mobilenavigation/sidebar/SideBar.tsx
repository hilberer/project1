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
            <button className="sidebarButton" onClick={()=>props.drawerHandler(false)}>
                <div className="sidebarButtonClose1">
                    <div className="sidebarButtonClose2"></div>
                </div>

            </button>

            <ul className="sidebarMenu">
                <li className="sidebarLiTags" onClick={() => handleRedirect(RoutingPath.home)}>Home</li>
                <li className="sidebarLiTags" onClick={() => handleRedirect(RoutingPath.signin)}>Login</li>
                <li className="sidebarLiTags" onClick={() => handleRedirect(RoutingPath.newrecipe)}>New Recipe</li>
                <li className="sidebarLiTags" onClick={() => handleRedirect(RoutingPath.addingredient)}>Add Ingredient</li>
            </ul>


        </div>
    )
}
