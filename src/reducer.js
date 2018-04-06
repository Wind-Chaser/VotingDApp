import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './user/userReducer'
import depositReducer from './user/depositReducer'
import web3Reducer from './util/web3/web3Reducer'

const reducer = combineReducers({
  routing: routerReducer,
  deposit:depositReducer,
  user: userReducer,
  web3: web3Reducer
})

export default reducer
