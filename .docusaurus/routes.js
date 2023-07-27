import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentations/search',
    component: ComponentCreator('/documentations/search', 'afa'),
    exact: true
  },
  {
    path: '/documentations/',
    component: ComponentCreator('/documentations/', '59f'),
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
        path: '/documentations/aml-templates/',
        component: ComponentCreator('/documentations/aml-templates/', 'ff8'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/aml-templates/CODE_OF_CONDUCT',
        component: ComponentCreator('/documentations/aml-templates/CODE_OF_CONDUCT', '1dc'),
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
