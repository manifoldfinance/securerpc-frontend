// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */

import nextra from "nextra";

const date = new Date();
const GIT_COMMIT_SHA_SHORT = typeof process.env.GIT_COMMIT_SHA === 'string' && process.env.GIT_COMMIT_SHA.substring(0, 8);



const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  search: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
});

export default withNextra({
 // i18n: {
 //   locales: ['en', 'zh', 'ru'],
 //   defaultLocale: 'en'
 // },
  async redirects() {
    return [
      // Temp redirect before we build a `blog/` TOC page.
      {
        source: "/blog",
        destination: "/blog/introducing-securerpc",
        permanent: false,
      },
    ];
  },
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  experimental: {
    instrumentationHook: true,
    webVitalsAttribution: ['CLS', 'LCP']
  },
  env: {
    /**
     * @summary API Key Env Variables
     */
    // GITHUB_DISPATCH_TOKEN: process.env.GITHUB_DISPATCH_TOKEN,
    /**
    * @const VERCEL_
    * @see {@link https://vercel.com/docs/environment-variables#system-environment-variables}
    */
    VERCEL: process.env.VERCEL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    CI: process.env.CI,
   // NEXT_PUBLIC_POSTHOG_KEY: process.env.POSTHOG_PUBLIC_KEY 
    NEXT_PUBLIC_POSTHOG_KEY: 'phc_whmN5m71L8ZTRMHWT3n5dE9SofuRsE4O2DChheLU33H'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
