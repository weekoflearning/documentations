import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/build/search',
    component: ComponentCreator('/build/search', '16f'),
    exact: true
  },
  {
    path: '/build/',
    component: ComponentCreator('/build/', '708'),
    routes: [
      {
        path: '/build/',
        component: ComponentCreator('/build/', '1c3'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/build/aml-templates/',
        component: ComponentCreator('/build/aml-templates/', 'bfb'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/build/aml-templates/',
        component: ComponentCreator('/build/aml-templates/', 'afa'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/build/aml-templates/CODE_OF_CONDUCT',
        component: ComponentCreator('/build/aml-templates/CODE_OF_CONDUCT', '7da'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/build/aml-templates/SECURITY',
        component: ComponentCreator('/build/aml-templates/SECURITY', '1be'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/build/caches',
        component: ComponentCreator('/build/caches', '128'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/build/category/aml-templates',
        component: ComponentCreator('/build/category/aml-templates', '33f'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/build/sample',
        component: ComponentCreator('/build/sample', 'a6a'),
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
