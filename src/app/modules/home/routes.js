import React from 'react';

export default {
  component: require('components/common/Layout').default,

  childRoutes: [
    {
      path: 'home',
      getComponent(nextState, cb) {
        System.import('modules/home/views/Index').then((m) => {
          cb(null, m.default)
        })
      }
    }
  ]
};
