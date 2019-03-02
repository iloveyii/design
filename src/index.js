/**
 * Standard packages
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

/**
 * Our custom components / packages
 */
import { ENVIRONMENT } from "./Common/behaviour";
import App from './App';
import { eventsReadAction } from "./Actions/EventsActions";

/**
 * Resources
 */
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// # 01
/**
 * A reducer is a function that operates on the state object and then returns it
 * Please note that this function is also called during initialization of store - so any code
 * without if stmt will be executed multiple times - internal operation of store !
 * @param state - this is a misleading name - here it is not the full state but just corresponding key value
 * @param action
 * @returns {Array} - every return value is assigned to the corresponding key in allReducers
 */
import UserReducer from './Reducers/UserReducer';
import CategoryReducer from './Reducers/CategoryReducer';
import TriggerReducer from './Reducers/TriggerReducer';
import EventStatsReducer from './Reducers/EventStatsReducer';
import OddsReducer from './Reducers/OddsReducer';
import OrderReducer from './Reducers/OrderReducer';
import EventsReducer from './Reducers/EventsReducer';
import EventReducer from './Reducers/EventReducer';
import SessionReducer from './Reducers/SessionReducer';
import OrdersReducer from './Reducers/OrdersReducer';

import rootSaga from './Sagas/rootSaga';
const allReducers = combineReducers({
});

// # 02
/**
 * Sagas to connect to external world - async api calls
 */
const sagaMiddleware = createSagaMiddleware();

// # 03
/**
 * Store enhancers, devToolsExtensions
 */
// Fixing error : TypeError: t is undefined
// Only chrome can handle the redux dev tool
// redux compose cannot handle a null or undefined middleware
const allStoreEnhancers = window.navigator.userAgent.includes('Chrome') && window.devToolsExtension && ENVIRONMENT.DEV
    ? compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension && window.devToolsExtension()
    )
    : applyMiddleware(sagaMiddleware);

// # 04
/**
 * Create store with allReducers which are all called one by one when there is dispatch
 * Second param is initial state of store
 * Last param is for redux debug in chrome extension
 * @type {Store<S&StateExt>&Ext}
 */
const store = createStore(
    allReducers,
    {},
    allStoreEnhancers
);
sagaMiddleware.run(rootSaga);

// # 05
/**
 * You can see the status of store - but only data and not reducers
 */
// console.log(store.getState());

// # 06
/**
 * Action is an object with format of type and payload
 * @type {{type: string, payload: {newState: string}}}
 * Dispatch action to store
 */

/*
* no need here moved to App component for unified standard place for all these actions
store.dispatch(eventStatsUpdateAction());
let statsUpdate = localStorage.getItem('statsUpdate');
clearInterval(statsUpdate);
statsUpdate = setInterval(() => store.dispatch(eventStatsUpdateAction()), 6000);
localStorage.setItem('statsUpdate', statsUpdate);
*/

// Read events
if(true || ENVIRONMENT.DEV) {
    // store.dispatch(eventsReadAction());
}

/**
 * Avoid setting up multiple interval objects in background
 * @type {string | null}
 */

// store.subscribe(() =>  { console.log('subscribed store in index', store.getState()); TotalGoalsModel.showState(store.getState()); });

/**
 * Render the main App Component
 */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
