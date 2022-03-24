const AllimagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ALL_IMAGES':
            return action.payload
        default:
            return state
    }
}

export default AllimagesReducer