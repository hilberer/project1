import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { DesktopNavigation} from './desktopnavigation/DesktopNavigation'
import './Navigation.css'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const Navigation = () => {

    const { width } = useWindowDimensions()
    const displayNavigationDependingOnDevice = () => {

        return (width <= 1000)
            ? <MobileNavigation/>
            : <DesktopNavigation/>
    }


    return (
        <div className="wrapper">
{/*             <span className="desktopNav"><DesktopNavigation/></span>
            <span className="MobileNavigation"><MobileNavigation/></span> */}
  {/*           <span className="mobileNav"><ToggleButton className="button" img={Navicon} img2={CloseX}><MobileNavigation/></ToggleButton></span> */}
            {displayNavigationDependingOnDevice()}
        </div>
    )
}
