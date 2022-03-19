const addColorReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COLOR':
            return action.payload
        default:
            return state
    }
}

export default addColorReducer