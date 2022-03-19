const addSubCategoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUBCATEGORY':
            return action.payload
        default:
            return state
    }
}

export default addSubCategoryReducer