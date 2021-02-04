import './MobileNavigation.css'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import { useState } from 'react'
import { BackDrop } from '../../backdrop/BackDrop'

export const MobileNavigation = () => {


    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    return (
        <div className="mobileNavigationWrapper">
            <HamburgerButton drawerHandler={setOpenDrawer} />
            <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer}/>
{/*             <BackDrop drawerHandler={setOpenDrawer} />
            {!openDrawer || <BackDrop drawerHandler={setOpenDrawer} />} */}
        </div>
    )
}
