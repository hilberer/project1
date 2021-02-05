
export interface Pizza  {
    name: string,
    ingredients: Array<Ingredient>,
}

export interface Ingredient {
    name: string,
    type: string,
    quantity: number,
}