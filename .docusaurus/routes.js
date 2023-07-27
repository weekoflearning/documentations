import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentations/build/__docusaurus/debug',
    component: ComponentCreator('/documentations/build/__docusaurus/debug', '33b'),
    exact: true
  },
  {
    path: '/documentations/build/__docusaurus/debug/config',
    component: ComponentCreator('/documentations/build/__docusaurus/debug/config', '768'),
    exact: true
  },
  {
    path: '/documentations/build/__docusaurus/debug/content',
    component: ComponentCreator('/documentations/build/__docusaurus/debug/content', 'fa8'),
    exact: true
  },
  {
    path: '/documentations/build/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentations/build/__docusaurus/debug/globalData', 'c1e'),
    exact: true
  },
  {
    path: '/documentations/build/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentations/build/__docusaurus/debug/metadata', '5cb'),
    exact: true
  },
  {
    path: '/documentations/build/__docusaurus/debug/registry',
    component: ComponentCreator('/documentations/build/__docusaurus/debug/registry', '4aa'),
    exact: true
  },
  {
    path: '/documentations/build/__docusaurus/debug/routes',
    component: ComponentCreator('/documentations/build/__docusaurus/debug/routes', '9d7'),
    exact: true
  },
  {
    path: '/documentations/build/search',
    component: ComponentCreator('/documentations/build/search', 'd43'),
    exact: true
  },
  {
    path: '/documentations/build/',
    component: ComponentCreator('/documentations/build/', 'fee'),
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
        path: '/documentations/build/topics/container',
        component: ComponentCreator('/documentations/build/topics/container', 'd0f'),
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
