const addProductReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return action.payload
        default:
            return state
    }
}

export default addProductReducer