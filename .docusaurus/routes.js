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
    component: ComponentCreator('/documentations/build/', '02e'),
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
        path: '/documentations/build/topics/aws',
        component: ComponentCreator('/documentations/build/topics/aws', 'cc7'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/topics/azure',
        component: ComponentCreator('/documentations/build/topics/azure', '893'),
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
        path: '/documentations/build/topics/flows',
        component: ComponentCreator('/documentations/build/topics/flows', '541'),
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
