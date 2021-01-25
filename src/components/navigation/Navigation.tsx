import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { DesktopNavigation} from './desktopnavigation/DesktopNavigation'
import Navicon from '../../shared/images/navicon.png'
import { ToggleButton } from '../../hooks/ToggleButton'
import './Navigation.css'

export const Navigation = () => {


    return (
        <div className="wrapper">
            <span className="mobileNav"><ToggleButton className="button" img={Navicon}><MobileNavigation/></ToggleButton></span>
            <span className="desktopNav"><DesktopNavigation/></span>
        </div>
    )
}
