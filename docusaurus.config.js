// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Week of learning docs',
  url: 'https://weekoflearning.github.io/',
  baseUrl: '/build/',
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
          alt: 'Repo logo',
          src: 'img/IMG_20210515_160400_603.jpg',
        },
        items: [
          {
            position: 'left',
            label: 'aml-templates',
            to: "/category/aml-templates"
          },
          {
            position: 'left',
            label: 'aml-templates2',
            to: "/aml-templates"
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
                label: 'aml-templates',
                to: '/aml-templates/',
              },
              {
                label: 'Meuse',
                to: '/category/meuse',
              },
              {
                label: 'DSA',
                to: '/category/rewatch',
              },
              {
                label: 'System Design',
                to: '/category/external',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Go to GitHub Profile',
                href: 'https://github.com/ashishonce',
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
