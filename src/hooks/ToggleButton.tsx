import { useState } from 'react'

export const ToggleButton = (props: {name?: string, children?: React.ReactNode, img?: string, className?: string}) => {

    const [showNavigation, setShowNavigation] = useState(false)
    const onClick = () => setShowNavigation(!showNavigation)

    return (
        <div>

            {/* <button onClick={onClick}>{props.name}</button> */}
            <button className={props.className}><img src={props.img} alt="" onClick={onClick}/>{props.name}</button>
            { showNavigation ? props.children: null }
        </div>
    )
}
