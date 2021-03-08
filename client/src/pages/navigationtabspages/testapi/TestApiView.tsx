import BackendAPIService from '../../../shared/api/service/BackendAPIService'
import { iCreateNewUser } from '../../../shared/interface/Interface'
import { useEffect, useState } from 'react'

export const TestApiView = () => {

    const [users, setUsers] = useState([])
    const [loading, ] = useState(false)
    const [newUser, setNewUser] = useState<iCreateNewUser> ({
        username: 'hejhej123',
        password: 'secret'
    })

    const x = async () => {
        try {
           const response = BackendAPIService.createUser(newUser)
           console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    const fetchData = async () => {
        const response = await BackendAPIService.getAllUsers()
        setUsers(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [loading])

    return (
        <div>
            <h1>Backend API: </h1>
            <br/>
            <p>USERNAME</p> <input className="input1" onChange={(event) => setNewUser({ ...newUser, username: event.target.value})} /> <br/>
            <p>PASSWORD</p> <input className="input1"/> <br/>
            <p>AGE</p> <input />
            <button onClick={() => x()}>Create user</button>
            <button onClick={() => fetchData()}>Get users</button>
            <h1> Displaying all users</h1>
            {users.map((y: any) => <div><span>{y.username}</span></div>)}

        </div>
    )
}
