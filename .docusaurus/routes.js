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
    component: ComponentCreator('/documentations/build/', '46f'),
    routes: [
      {
        path: '/documentations/build/',
        component: ComponentCreator('/documentations/build/', 'edc'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/aml-templates/',
        component: ComponentCreator('/documentations/build/aml-templates/', '1a0'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/aml-templates/',
        component: ComponentCreator('/documentations/build/aml-templates/', '374'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/aml-templates/CODE_OF_CONDUCT',
        component: ComponentCreator('/documentations/build/aml-templates/CODE_OF_CONDUCT', '9fb'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/aml-templates/SECURITY',
        component: ComponentCreator('/documentations/build/aml-templates/SECURITY', 'd8f'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/category/all-dashboards',
        component: ComponentCreator('/documentations/build/category/all-dashboards', 'e23'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/category/aml-templates',
        component: ComponentCreator('/documentations/build/category/aml-templates', '387'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/category/rewatch-video',
        component: ComponentCreator('/documentations/build/category/rewatch-video', '34d'),
        exact: true,
        sidebar: "docsidebar"
      },
      {
        path: '/documentations/build/sample',
        component: ComponentCreator('/documentations/build/sample', '9c6'),
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
