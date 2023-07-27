import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a94'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '00e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '40c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a68'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8d5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b0d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'da4'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5b5'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cb4'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '35d'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/aml-templates/',
        component: ComponentCreator('/aml-templates/', '4c2'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/aml-templates/CODE_OF_CONDUCT',
        component: ComponentCreator('/aml-templates/CODE_OF_CONDUCT', 'e06'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/aml-templates/SECURITY',
        component: ComponentCreator('/aml-templates/SECURITY', 'a47'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/caches',
        component: ComponentCreator('/caches', '317'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/category/aml-templates',
        component: ComponentCreator('/category/aml-templates', '775'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/sample',
        component: ComponentCreator('/sample', '469'),
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
