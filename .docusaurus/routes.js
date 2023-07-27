import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentations/__docusaurus/debug',
    component: ComponentCreator('/documentations/__docusaurus/debug', '7bc'),
    exact: true
  },
  {
    path: '/documentations/__docusaurus/debug/config',
    component: ComponentCreator('/documentations/__docusaurus/debug/config', '6d0'),
    exact: true
  },
  {
    path: '/documentations/__docusaurus/debug/content',
    component: ComponentCreator('/documentations/__docusaurus/debug/content', 'aa6'),
    exact: true
  },
  {
    path: '/documentations/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentations/__docusaurus/debug/globalData', '738'),
    exact: true
  },
  {
    path: '/documentations/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentations/__docusaurus/debug/metadata', '970'),
    exact: true
  },
  {
    path: '/documentations/__docusaurus/debug/registry',
    component: ComponentCreator('/documentations/__docusaurus/debug/registry', '0ae'),
    exact: true
  },
  {
    path: '/documentations/__docusaurus/debug/routes',
    component: ComponentCreator('/documentations/__docusaurus/debug/routes', 'e1d'),
    exact: true
  },
  {
    path: '/documentations/search',
    component: ComponentCreator('/documentations/search', '1b6'),
    exact: true
  },
  {
    path: '/documentations/',
    component: ComponentCreator('/documentations/', 'd2b'),
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
