import {combineReducers} from 'redux'
import countReducer from './countReducer'
import mainLoaderReducer from './mainLoaderReducer'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer'
import WishListReducer from './WishListReducer'
import CategoryReducer from './CategoryReducer'
import addSubCategoryReducer from './addSubCategoryReducer'
import addColorReducer from './addColorReducer'
import addSizeReducer from './addSizeReducer'
import addShipmentReducer from './addShipmentReducer'
import walletConnectedReducer from './walletConnectedReducer'
import addAddressReducer from './addAddressReducer'
import CategoriesReducer from './CategoriesReducer'
import ImageReducer from './ImagesReducer'
import AllimagesReducer from './AllimagesReducer'
import ViewReducer from './ViewReducer'
import QuantityReducer from './QuantityReducer'

const rootReducer = combineReducers({
    counter: countReducer,
    mainLoader: mainLoaderReducer,
    product: ProductReducer,
    cart: CartReducer,
    wishList: WishListReducer,
    category: CategoryReducer,
    subCategory: addSubCategoryReducer,
    color: addColorReducer,
    size: addSizeReducer,
    shipment: addShipmentReducer,
    walletConnected: walletConnectedReducer,
    address: addAddressReducer,
    cat: CategoriesReducer,
    images: ImageReducer,
    allIMages: AllimagesReducer,
    view: ViewReducer,
    quantity: QuantityReducer,
})

export default rootReducer