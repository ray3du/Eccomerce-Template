const walletConnectedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_CONNECTED':
            return !state
        default:
            return state
    }   
}

export default walletConnectedReducer