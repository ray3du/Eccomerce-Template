import {combineReducers} from 'redux'
import countReducer from './countReducer'
import mainLoaderReducer from './mainLoaderReducer'
import addProductReducer from './addProductReducer'
import addCartReducer from './addCartReducer'
import addWishListReducer from './addWishListReducer'

const rootReducer = combineReducers({
    counter: countReducer,
    mainLoader: mainLoaderReducer,
    product: addProductReducer,
    cart: addCartReducer,
    wishList: addWishListReducer
})

export default rootReducer