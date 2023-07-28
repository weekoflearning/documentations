import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentations/build/search',
    component: ComponentCreator('/documentations/build/search', '5fd'),
    exact: true
  },
  {
    path: '/documentations/build/',
    component: ComponentCreator('/documentations/build/', '919'),
    routes: [
      {
        path: '/documentations/build/',
        component: ComponentCreator('/documentations/build/', 'edc'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/category/topics',
        component: ComponentCreator('/documentations/build/category/topics', 'a19'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/flows/https',
        component: ComponentCreator('/documentations/build/flows/https', '745'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/sample',
        component: ComponentCreator('/documentations/build/sample', '9c6'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/topics/authentication',
        component: ComponentCreator('/documentations/build/topics/authentication', '0c8'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/topics/caches',
        component: ComponentCreator('/documentations/build/topics/caches', 'c11'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/topics/coding Problem Patterns',
        component: ComponentCreator('/documentations/build/topics/coding Problem Patterns', 'b8a'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/topics/container',
        component: ComponentCreator('/documentations/build/topics/container', 'd0f'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/topics/Major Important Flows',
        component: ComponentCreator('/documentations/build/topics/Major Important Flows', '49c'),
        exact: true,
        sidebar: "docsidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
