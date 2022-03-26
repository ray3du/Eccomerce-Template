const quantity = {
    id: '',
    count: 1
}

const QuantityReducer = (state = quantity, action) => {
    switch (action.type) {
        case 'ADD_QUANTITY':
            return {
                ...state,
                id: action.payload.id,
                count: action.payload.count > 1 ? 1 : state.count ++
            }

        case 'SUB_QUANTITY':
            return {
                ...state,
                id: action.payload,
                count: action.payload.count > 1 ? 1 : state.count --
            }
        default:
            return state
    }
}

export default QuantityReducer