import RoutingPath from '../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import './AddButton.css'

export const AddButton = () => {

    const history = useHistory()
    return (
        <div className="addWrapper">
            <button className="addButton" onClick={() => history.push(RoutingPath.newrecipe)}>
                <div className="addButton_Line1">
                    <div className="addButton_Line2"></div>
                </div>
            </button>
        </div>
    )
}
