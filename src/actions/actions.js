export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const mainLoader = () => {
    return {
        type: 'MAINLOADER'
    }
}

export const productAction = (data) => {
    return {
        type: 'ADD_PRODUCT',
        payload: data
    }
}

export const addCart = (id) => {
    return {
        type: 'ADD_CART',
        payload: {
            id
        }
    }
}