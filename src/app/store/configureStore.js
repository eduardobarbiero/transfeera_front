
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { stateReducer } from "store/reducers/stateReducer";


export const rootReducer = combineReducers(
  {
    routing: routerReducer,
    states: stateReducer
  }
);

const store = createStore(rootReducer,
  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory)
  )
);

export default store;