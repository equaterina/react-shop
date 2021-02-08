import { combineReducers, createStore, applyMiddleware } from 'redux';

//Reducers
import { cartReducer } from './cart/cartReducers';
import { userReducer} from './users/usersReducers'
import { favoritesReducer } from './favorites/favoritesReducers';

//Middleware
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'


const middlewares = [ReduxThunk, logger]


const rootReducer = combineReducers({user:userReducer, cart:cartReducer, favorites:favoritesReducer})

const store = createStore(rootReducer, applyMiddleware(...middlewares));

console.log(store);

export default store;