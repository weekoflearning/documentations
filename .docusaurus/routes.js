import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', 'cc3'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '209'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '8a5'),
        exact: true,
        sidebar: "billingSidebar"
      },
      {
        path: '/category/external',
        component: ComponentCreator('/category/external', 'ed0'),
        exact: true,
        sidebar: "billingSidebar"
      },
      {
        path: '/category/rewatch',
        component: ComponentCreator('/category/rewatch', '7ce'),
        exact: true,
        sidebar: "billingSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
