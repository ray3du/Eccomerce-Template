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

export const removeCart = (id) => {
    return {
        type: 'REMOVE_CART',
        payload: {
            id
        }
    }
}

export const addWishList = (id) => {
    return {
        type: 'ADD_WISHLIST',
        payload: {
            id
        }
    }
}

export const removeWishList = (id) => {
    return {
        type: 'REMOVE_WISHLIST',
        payload: {
            id
        }
    }
}

export const addCategory = (data) => {
    return {
        type: 'ADD_CATEGORY',
        payload: data
    }
}

export const addSubCategory = (data) => {
    return {
        type: 'ADD_SUBCATEGORY',
        payload: data
    }
}

export const addColor = (data) => {
    return {
        type: 'ADD_COLOR',
        payload: data
    }
}

export const addSize = (data) => {
    return {
        type: 'ADD_SIZE',
        payload: data
    }
}

export const addShipment = (data) => {
    return {
        type: 'ADD_SHIPMENT',
        payload: data
    }
}

export const setWalletConnected = () => {
    return {
        type: 'SET_CONNECTED'
    }
}

export const addAddress = (address) => {
    return {
        type: 'ADD_ADDRESS',
        payload: address
    }
}

export const categoryCat = (id) => {
    return {
        type: 'CATEGORY',
        payload: id
    }
}

export const addImages = (path) => {
    return {
        type: 'ADD_IMAGE',
        payload: path
    }
}

export const addAllIMages = (path) => {
    return {
        type: 'ADD_ALL_IMAGES',
        payload: path
    }
}