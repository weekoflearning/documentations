// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Week of learning docs',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themes: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), ({indexBlog: false, docsRouteBasePath: "/"})]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Billing Docs Logo',
          src: 'img/money.png',
        },
        items: [
          {
            position: 'left',
            label: 'Gitcoin',
            to: "/category/gitcoin"
          },
          {
            position: 'left',
            label: 'Meuse',
            to: "/category/meuse"
          },
          {
            position: 'left',
            label: 'Rewatch',
            to: "/category/rewatch"
          },
          {
            position: 'left',
            label: 'External',
            to: "/category/external"
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Gitcoin',
                to: '/category/gitcoin',
              },
              {
                label: 'Meuse',
                to: '/category/meuse',
              },
              {
                label: 'Rewatch',
                to: '/category/rewatch',
              },
              {
                label: 'External',
                to: '/category/external',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'View this site on GitHub',
                href: '/',
              },
            ],
          },
        ],
        copyright: "Content on this site is confidential and for internal use only.",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;