import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '3a1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '0d8'),
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
        path: '/aml-templates/',
        component: ComponentCreator('/aml-templates/', '229'),
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
        path: '/category/aml-templates',
        component: ComponentCreator('/category/aml-templates', '775'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/category/system-design',
        component: ComponentCreator('/category/system-design', '7cb'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/category/training-videos',
        component: ComponentCreator('/category/training-videos', 'd40'),
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
