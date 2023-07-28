// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Week of learning docs',
  url: 'https://weekoflearning.github.io/',
  baseUrl: '/documentations/build/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  markdown: {
    // format: 'detect',
    mermaid: true,
    // mdx1Compat: {
    //   comments: false,
    // }
  },
  themes: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), ({indexBlog: false, docsRouteBasePath: "/"})],
    // [require.resolve("@docusaurus/theme-mermaid"), {}],
    ['@docusaurus/theme-live-codeblock',{}]
  ],

  scripts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/9.2.2/mermaid.min.js',
      async: true,
    },
  ],
  plugins: [
    '@docusaurus/theme-mermaid'
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
    // /** @type {import('@docusaurus/theme-mermaid').UserThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Week of learning',
        // logo: {
        //   alt: 'Repo logo',
        //   src: 'img/IMG_20210515_160400_603.jpg',
        // },
        items: [
          {
            type: 'doc',
            position: 'left',
            label: 'topics',
            docId: "/category/topics"
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
                label: 'ZingBing',
                href: 'https://github.com/ashishonce/zingbing.in',
              },
              // {
              //   label: 'Meuse',
              //   to: '/category/meuse',
              // },
              // {
              //   label: 'DSA',
              //   to: '/category/rewatch',
              // },
              // {
              //   label: 'System Design',
              //   to: '/category/external',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/ashishonce/documentations',
              },
            ],
          },
        ],
        copyright: "All content rights reserved!",
      },
      // mermaid: {
      //   theme: {
      //     dark: 'dark',
      //     light: 'default',
      //   },
        
      //   options: {},
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
