import BackendAPIService from '../../../shared/api/service/BackendAPIService'
import { iCreateNewRecipe, iCreateNewUser } from '../../../shared/interface/Interface'
import { useEffect, useState } from 'react'
import BackendAPIRecipe from '../../../shared/api/service/BackendAPIRecipe'

export const TestApiView = () => {

    const [users, setUsers] = useState([])
    const [loading, ] = useState(false)
    const [newUser, setNewUser] = useState<iCreateNewUser> ({
        username: 'hejhej123',
        password: 'secret'
    })
    const [newRecipe, setNewRecipe] = useState<iCreateNewRecipe>({name: '', cheese: 0})
    const [recipes, setRecipes] = useState([])

    const recipe = async () => {
        console.log(newRecipe)
        if (!isRecipeEmpty(newRecipe)) {
            try {
                const response = BackendAPIRecipe.createRecipe(newRecipe)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('Recipe has no name')
        }
    }
    const fetchRecipes = async () => {
        const response = await BackendAPIRecipe.getAllRecipes()
        setRecipes(response.data)

    }

    useEffect(() => {
        fetchRecipes()
    },[loading])

    const isRecipeEmpty = (recipe: iCreateNewRecipe): boolean => {
        return recipe.name === ''
    }

    const user = async () => {
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
            <p>AGE</p> <input /> <br/>
            <p>PIZZA NAME</p> <input onChange={(event) => setNewRecipe({ ...newRecipe, name: event.target.value})}></input> <br/>
            <button onClick={() => user()}>Create user</button>
            <button onClick={() => fetchData()}>Get users</button>
            <button onClick={() => recipe()}>Create new recipe</button>
            <button onClick={() => fetchRecipes()}>Display all Recipes</button>
            <h1> Displaying all users</h1>
            {users.map((y: any) => <div><span>{y.username}</span></div>)}
            <h1> Displaying all recipes</h1>
            {recipes.map((x: any) => <div><span>{x.name}</span></div>)}

        </div>
    )
}
