const initialState = {
    id: [],
    count: 0
}

const addCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                id: [...state.id, action.payload.id],
                count: state.count += 1 
            }
        default:
            return state
    }
}

export default addCartReducer