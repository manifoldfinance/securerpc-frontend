// @ts-check
/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */

import { useRouter } from 'next/router';
import { GitHubIcon } from 'nextra/icons';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { Link, useConfig } from 'nextra-theme-docs'


import { Footer } from './components/Footer';
import { TelegramIcon } from './components/icons';
import SecureRPCLogo from './public/secure_rpc.svg';

const config: DocsThemeConfig = {
  banner: {
    key: '3.0-release',
    content: (
      <div className='before:content-["🎉_"]'>
        SecureRPC 3.0 is out!{' '}
        <Link
          href="https://forums.manifoldfinance.com"
          className='after:content-["_→"]'
        >
          Read more
        </Link>
      </div>
    )
  },
  logo: (
    <>
      <SecureRPCLogo className="logo" />
      <span className="_sr-only">SecureRPC</span>
    </>
  ),
  project: {
    link: 'https://github.com/manifoldfinance',
    icon: (
      <>
        <GitHubIcon className="text-neutral-800 transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
        <span className="_sr-only">GitHub</span>
      </>
    ),
  },
  chat: {
    link: 'https://t.me/manifoldfinance',
    icon: (
      <>
        <TelegramIcon className="text-neutral-800 transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
        <span className="_sr-only">Telegram</span>
      </>
    ),
  },
  footer: {
    content: <Footer />,
  },
  color: {
    hue: { dark: 186, light: 186 },
    saturation: { dark: 86, light: 86 },
  },
  docsRepositoryBase: 'https://github.com/manifoldfinance/securerpc-site/tree/master/docs',
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  editLink: {
    content: 'Edit this page on GitHub →',
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: null,
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  faviconGlyph: '🔐',
  head: function useHead() {
    const config = useConfig();
    const { route } = useRouter();

    const isDefault = route === '/' || !config.title;

    // Building Your Application: Caching | Next.js
    const title = isDefault
      ? 'SecureRPC – Connect to Opportunities'
      : `${config.frontMatter.title ?? 'Documentation'} – SecureRPC`;

    // An overview of caching mechanisms in Next.js.
    const description = config.frontMatter.description ?? 'SecureRPC';

    const image = config.frontMatter.image ?? 'https://SecureRPC.com/og.png';

    return (
      <>
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@foldfinance" />
        <meta name="twitter:site:domain" content="SecureRPC.com" />
        <meta name="twitter:url" content="https://SecureRPC.com" />

        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="SecureRPC" />
        <meta name="msapplication-TileColor" content="#fff" />


        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        /> */}

        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111111" media="(prefers-color-scheme: dark)" />
      </>
    );
  },
};

export default config;
