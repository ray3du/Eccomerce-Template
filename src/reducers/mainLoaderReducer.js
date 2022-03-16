const mainLoaderReducer = (state=false, action) => {
    switch (action.type) {
        case 'MAINLOADER':
            return !state
        default:
            return state
    }
}

export default mainLoaderReducer