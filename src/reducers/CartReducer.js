const initialState = {
    id: [],
    count: 0
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                id: [...state.id, action.payload.id],
                count: state.count += 1 
            }
        case 'REMOVE_CART':
            return {
                ...state,
                id: state.id.filter(item =>  { return item !== action.payload.id }),
                count: state.count -= 1 
            }
        default:
            return state
    }
}

export default CartReducer