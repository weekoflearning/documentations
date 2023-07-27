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
    component: ComponentCreator('/', 'b1a'),
    routes: [
      {
        path: '/documentations/',
        component: ComponentCreator('/documentations/', '9eb'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/aml-templates/',
        component: ComponentCreator('/documentations/aml-templates/', '6c8'),
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
        path: '/documentations/aml-templates/SECURITY',
        component: ComponentCreator('/documentations/aml-templates/SECURITY', '163'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/caches',
        component: ComponentCreator('/documentations/caches', '554'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/category/aml-templates',
        component: ComponentCreator('/documentations/category/aml-templates', '01a'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/sample',
        component: ComponentCreator('/documentations/sample', '087'),
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
