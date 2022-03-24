const CategoriesReducer = (state = '', action) => {
    switch (action.type) {
        case 'CATEGORY':
            return state = action.payload
        default:
            return state
    }
}

export default CategoriesReducer