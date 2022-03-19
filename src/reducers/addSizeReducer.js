const addSizeReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SIZE':
            return action.payload
        default:
            return state
    }
}

export default addSizeReducer