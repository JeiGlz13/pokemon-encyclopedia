import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {modalReducer} from './reducers/modalReducer';
import { protaReducer } from './reducers/protaReducer';
import {regionReducer} from './reducers/regionReducer';
import { searchReducer } from './reducers/searchReducer';
import { starterReducer } from './reducers/starterReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    region: regionReducer,
    prota: protaReducer,
    starter: starterReducer,
    search: searchReducer,
    modal: modalReducer,
});
export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    ));