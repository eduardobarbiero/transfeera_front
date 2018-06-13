
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';

import { stateReducer } from "store/reducers/stateReducer";
import { cityReducer } from "store/reducers/cityReducer";
import { cepReducer } from "store/reducers/cepReducer";

export const rootReducer = combineReducers(
  {
    routing: routerReducer,
    states: stateReducer,
    cities: cityReducer,
    ceps: cepReducer
  }
);

const store = createStore(rootReducer,
  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory)
  )
);

export default store;