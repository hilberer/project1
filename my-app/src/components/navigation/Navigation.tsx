import { useState } from 'react'

export const Navigation = () => {

    const [showNavigation, setShowNavigation] = useState(false)
    const onClick = () => setShowNavigation(!showNavigation)

    return (
        <div>
            <button onClick={onClick}>Hej</button>
            { showNavigation ? <Results/> : null }
        </div>
    )
}
const Results = () => (
    <div className="results">1234</div>
)