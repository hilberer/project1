export interface loginCredentials {
    username: string,
    password: string
}

export interface iCreateNewUser {
    username: string,
    password: string,
    age?: number
}

export interface iCreateNewRecipe {
    name: string,
    cheese?: number
}