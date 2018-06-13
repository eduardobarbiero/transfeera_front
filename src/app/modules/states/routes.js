import React from 'react';

export default {
  component: require('components/common/Layout').default,

  childRoutes: [
    {
      path: 'states',
      getComponent(nextState, cb) {
        System.import('modules/states/views/Index').then((m) => {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'states/new',
      getComponent(nextState, cb) {
        System.import('modules/states/views/Form').then((m) => {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'states/:stateId/edit',
      getComponent(nextState, cb) {
        System.import('modules/states/views/Form').then((m) => {
          cb(null, m.default)
        })
      }
    }
  ]
};
