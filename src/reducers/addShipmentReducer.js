const addShipmentReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SHIPMENT':
            return action.payload
        default:
            return state
    }
}

export default addShipmentReducer