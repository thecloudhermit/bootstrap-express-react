import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import HomeReducer from './HomeReducer';

// This is were we combine all reducers to server into bundle
export default combineReducers({
    routing: routerReducer,
    home: HomeReducer
});