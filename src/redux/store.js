import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { protaReducer } from './reducers/protaReducer';
import {regionReducer} from './reducers/regionReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    region: regionReducer,
    prota: protaReducer,
});
export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    ));