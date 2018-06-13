import React from 'react';

export default {
  component: require('components/common/Layout').default,

  childRoutes: [
    {
      path: 'cities',
      getComponent(nextState, cb) {
        System.import('modules/cities/views/Index').then((m) => {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'cities/new',
      getComponent(nextState, cb) {
        System.import('modules/cities/views/Form').then((m) => {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'cities/:cityId/edit',
      getComponent(nextState, cb) {
        System.import('modules/cities/views/Form').then((m) => {
          cb(null, m.default)
        })
      }
    }
  ]
};
