import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Gligle Docs',
  tagline: 'Документація для користувачів та організаторів',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.gligle.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'efficaxteam', // Usually your GitHub org/user name.
  projectName: 'gligle_public_docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ua',
    locales: ['ua'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      // title: '',
      logo: {
        alt: 'Gligle Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'customerSidebar',
          position: 'left',
          label: 'Користувачам',
        },
        {
          type: 'docSidebar',
          sidebarId: 'organizerSidebar',
          position: 'left',
          label: 'Організаторам',
        },
        {
          type: 'docSidebar',
          sidebarId: 'legalSidebar',
          position: 'left',
          label: 'Документи',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://console.gligle.app/',
          label: 'Gligle Console',
          position: 'right',
        },
        {
          href: 'https://gligle.app/',
          label: 'Головний сайт',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Інформація',
          items: [
            {
              label: 'Користувачам',
              to: '/docs/customer',
            },
            {
              label: 'Організаторам',
              to: '/docs/organizer',
            },
            {
              label: 'Загальні правила платформи',
              to: '/docs/legal/general-rules',
            },
          ],
        },
        {
          title: 'Документи',
          items: [
            {
              label: 'Політика конфедиційності',
              href: 'https://gligle.app/ua/privacy-policy',
            },
            {
              label: 'Публічна оферта',
              href: 'https://gligle.app/ua/public-offer',
            },
          ],
        },
        {
          title: 'Контакти',
          items: [
            {
              label: 'support@gligle.app',
              href: 'mailto:support@gligle.app',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/gligleapp',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/gligle.app/',
            },
            {
              label: 'X',
              href: 'https://twitter.com/gligleapp',
            },
          ],
        },
      ],
      copyright: `© 2022-${new Date().getFullYear()} Gligle by Efficax Team`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
