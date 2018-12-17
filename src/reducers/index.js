import {combineReducers} from 'redux';
import products from './product';
import itemEditing from './ItemEditing'
const appReducers = combineReducers({
    products, /* preloadedState, */
    itemEditing},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default appReducers;