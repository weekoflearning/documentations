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
    component: ComponentCreator('/', 'e91'),
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
        path: '/category/all-dashboards',
        component: ComponentCreator('/category/all-dashboards', '89b'),
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
        path: '/category/rewatch-video',
        component: ComponentCreator('/category/rewatch-video', '2db'),
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
