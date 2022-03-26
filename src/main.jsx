import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import Cart from './components/Cart/Cart'
import WishList from './components/WishList/WishList'
import Product from './components/Product/Product'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={ <App /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/product/:id/' element={ <Product />} />
          <Route path='/wishlist' element={ <WishList />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
)
