const initialState = []

export default function reducer(state=initialState, actions){
    const {type, payload} = actions 
    switch(type){
        case 'ADD':
            return [...state, payload]
        case 'DELETE':
            return state.filter(each => each.name !== payload.name)
        default:
            return state
    }
}