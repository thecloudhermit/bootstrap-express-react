import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import combinedReducer from '../reducers/CombinedReducers';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'; // eslint-disable-line no-unused-vars
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router'; // eslint-disable-line no-unused-vars
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import * as Thunk from 'redux-thunk';
import HomeContainer from './HomeContainer';

export default class AppContainer extends Component {
    render() {
        const newCreateStore = applyMiddleware(Thunk.default)(createStore);
        const middleware = routerMiddleware(hashHistory);
        const store = newCreateStore(
            combinedReducer,
            applyMiddleware(middleware)
        );
        const history = syncHistoryWithStore(hashHistory, store);

        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={HomeContainer} location={this.props.location}/>
                </Router>
            </Provider>
        );
    }
}

