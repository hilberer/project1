import './Home.css'
/* import { useEffect, useState } from 'react' */

export const Home = () => {
/*     const [number, setNumber] = useState(0)

    useEffect(() => {
        alert('Homeview first render')
        return (() => alert('left homeview'))
    }, [number]) */

    return (
        <div className="homeWrapper">
{/*             <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increment</button> */}
                <div className="one">1</div>
                <div className="two">2</div>
                <div className="three">3</div>
        </div>
    )
}