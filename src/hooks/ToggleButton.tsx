import { useState } from 'react'

export const ToggleButton = (props: {name?: string, children?: React.ReactNode, img?: string, img2?: string, className?: string}) => {

    const [showNavigation, setShowNavigation] = useState<Boolean>(false)
    const [buttonImg, setButtonImg] = useState(props.img)

    const onClick = () => {

        setShowNavigation(!showNavigation)
        if (showNavigation === true && props.img2 !== undefined) {
            setButtonImg(props.img2)
        } else {
            setButtonImg(props.img)
        }
    }


    return (
        <div>

            <button className={props.className}><img src={buttonImg} alt="" onClick={onClick}/>{props.name}</button>
            { showNavigation ? props.children: null }
        </div>
    )
}
