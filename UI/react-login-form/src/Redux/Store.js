import {combineReducers,createStore} from 'redux'
import TokenReducer from './Reducer/TokenReducer'
import ProductReducer from './Reducer/ProductReducer'

var store=createStore(combineReducers({token:TokenReducer}),{token:""})

var store=createStore(combineReducers({
    products:ProductReducer
}),{
    products:[]
})

export default store;