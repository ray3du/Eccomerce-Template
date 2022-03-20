const initialState = {
    id: [],
    count: 0
}

const WishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WISHLIST':
            return {
                ...state,
                id: [...state.id, action.payload.id],
                count: state.count += 1 
            }
        case 'REMOVE_WISHLIST':
            return {
                ...state,
                id: state.id.filter(item => { return item !== action.payload.id } ),
                count: state.count -= 1
            }
        default:
            return state
    }
}

export default WishListReducer