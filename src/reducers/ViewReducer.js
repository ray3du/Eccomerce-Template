const ViewReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_VIEW':
            return state = action.payload  
        default:
            return state
    }
}

export default ViewReducer