import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { DesktopNavigation} from './desktopnavigation/DesktopNavigation'
import Navicon from '../../shared/images/navicon.png'
import CloseX from '../../shared/images/close-x.png'
import { ToggleButton } from '../../hooks/ToggleButton'
import './Navigation.css'

export const Navigation = () => {


    return (
        <div className="wrapper">
            <span className="desktopNav"><DesktopNavigation/></span>
            <span className="mobileNav"><ToggleButton className="button" img={Navicon} img2={CloseX}><MobileNavigation/></ToggleButton></span>
        </div>
    )
}
