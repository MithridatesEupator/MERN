import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export defaul combineReducers({
    item: itemReducer
})