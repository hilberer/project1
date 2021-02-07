import './Slider.css'
import { ChangeEvent } from 'react'
import { useState } from 'react'

export const Slider = (props: { step: number, min: number, max: number, value: number, defaultLength: number, onChangeValue: (e: number) => void}) => {

    const [slider, setSlider] = useState<number>(props.value)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSlider(parseInt(e.target.value))
        props.onChangeValue(slider)
    }
    return (
        <div className="sliderWrapper">
            <input
                className="range-slider"
                type="range"
                step={props.step}
                min={props.min}
                max={props.max}
                value={slider}
                onChange={handleChange}
            />
            <div className="value">{slider}%</div>
        </div>
    )
}
