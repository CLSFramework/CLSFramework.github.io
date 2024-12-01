import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cross Language Soccer Framework',
  tagline: 'A framework for soccer development and research in multiple languages',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://clsframework.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CLSF', // Usually your GitHub org/user name.
  projectName: 'CLSF', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CLSFramework/CLSFramework.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CLSFramework/CLSFramework.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/clsf_logo.jpg',
    navbar: {
      title: 'CLSF',
      logo: {
        alt: 'CLSF Logo',
        src: 'img/clsf_logo.jpg',
      },
      items: [
        {
          type: 'dropdown',
          to: 'docs/introduction/',
          position: 'left',
          label: 'Tutorial',
          items: [
            {
              type: 'doc',
              docId: 'introduction/index',
              label: 'Introduction',
            },
            {
              type: 'doc',
              docId: 'definitions/index',
              label: 'Defenitions',
            },
            {
              type: 'doc',
              docId: 'sampleserver/index',
              label: 'Playmaker Server',
            },
            {
              type: 'doc',
              docId: "basecode/index",
              label: 'Base Code',
            },
            {
              type: 'doc',
              docId: 'idl/index',
              label: 'IDL',
            },
            {
              type: 'doc',
              docId: 'proxy/index',
              label: 'Soccer Simulation Proxy',
            },
            {
              type: 'doc',
              docId: 'soccersimulation/index',
              label: 'Soccer Simulation',
            },
            {
              type: 'doc',
              docId: 'ToturialVideos/index',
              label: 'Tutorial Videos',
            },
          ]
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/release', label: 'Release', position: 'left'},
        {to: '/team', label: 'Team', position: 'left'},
        {
          href: 'https://github.com/clsframework/clsframework.github.io',
          label: 'GitHub',
          position: 'right',
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
              label: 'Tutorial',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Github Organization',
              href: 'https://github.com/CLSFramework',
            },
            {
              label: 'RCSS Proxy',
              href: 'https://github.com/CLSFramework/soccer-simulation-proxy',
            },
            {
              label: 'Playmaker Server Python',
              href: 'https://github.com/CLSFramework/playmaker-server-python',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `🅭 <a target="_BLANK" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> License  ${new Date().getFullYear()} CLSFramework. Built with <a  target="_BLANK" href="https://docusaurus.io/">Docusaurus</a>`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'A4JYP2MKXW',

      // Public API key: it is safe to commit it
      apiKey: '0672316b5c456df1af027f3b21e7c60c',

      indexName: 'clsframeworkio',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/docs/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
