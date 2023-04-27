
export const AddProduct = (value) => {
    return {type: 'ADD', payload: value}
}

export const DeleteProduct = (value) => {
    return {type: 'DELETE', payload: {name: value}}
}