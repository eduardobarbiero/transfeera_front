import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, hashHistory } from 'react-router';

import store from './store/configureStore';

const history = syncHistoryWithStore(hashHistory, store);

const routes = {

	path: '/',
	indexRoute: { onEnter: (nextState, replace) => replace('/home') },
	childRoutes: [
        require('modules/home/routes').default,
        require('modules/states/routes').default,
        require('modules/cities/routes').default,
        require('modules/ceps/routes').default
	]
};

ReactDOM.render((	
    <Provider store={store}>        
        <Router
            history={history}
            routes={routes}            
        >            
        </Router>    
        
    </Provider>	
), document.getElementById('root'));