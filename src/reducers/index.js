import {combineReducers} from 'redux'
import countReducer from './countReducer'
import mainLoaderReducer from './mainLoaderReducer'
import addProductReducer from './addProductReducer'
import addCartReducer from './addCartReducer'
import addWishListReducer from './addWishListReducer'
import addCategoryReducer from './addCategoryReducer'
import addSubCategoryReducer from './addSubCategoryReducer'
import addColorReducer from './addColorReducer'
import addSizeReducer from './addSizeReducer'
import addShipmentReducer from './addShipmentReducer'
import walletConnectedReducer from './walletConnectedReducer'
import addAddressReducer from './addAddressReducer'

const rootReducer = combineReducers({
    counter: countReducer,
    mainLoader: mainLoaderReducer,
    product: addProductReducer,
    cart: addCartReducer,
    wishList: addWishListReducer,
    category: addCategoryReducer,
    subCategory: addSubCategoryReducer,
    color: addColorReducer,
    size: addSizeReducer,
    shipment: addShipmentReducer,
    walletConnected: walletConnectedReducer,
    address: addAddressReducer,
})

export default rootReducer