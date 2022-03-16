import {combineReducers} from 'redux'
import countReducer from './countReducer'
import mainLoaderReducer from './mainLoaderReducer'

const rootReducer = combineReducers({
    counter: countReducer,
    mainLoader: mainLoaderReducer
})

export default rootReducer