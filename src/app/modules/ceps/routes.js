import React from 'react';

export default {
  component: require('components/common/Layout').default,

  childRoutes: [
    {
      path: 'ceps',
      getComponent(nextState, cb) {
        System.import('modules/ceps/views/Index').then((m) => {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'ceps/new',
      getComponent(nextState, cb) {
        System.import('modules/ceps/views/Form').then((m) => {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'ceps/:cepId/edit',
      getComponent(nextState, cb) {
        System.import('modules/ceps/views/Form').then((m) => {
          cb(null, m.default)
        })
      }
    }
  ]
};
