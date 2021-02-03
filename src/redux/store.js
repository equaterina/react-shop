import { combineReducers, createStore, applyMiddleware } from 'redux';

//Reducers
import { cartReducer } from './reducers/cart';
import { userReducer} from './reducers/users'
import { favoritesReducer } from './reducers/favorites';

//Middleware
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'


const middlewares = [ReduxThunk, logger]


const rootReducer = combineReducers({user:userReducer, cart:cartReducer, favorites:favoritesReducer})

const store = createStore(rootReducer, applyMiddleware(...middlewares));

console.log(store);

export default store;