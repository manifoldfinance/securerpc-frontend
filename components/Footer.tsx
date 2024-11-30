import Link from 'next/link';
import { GitHubIcon } from 'nextra/icons';

import SecureRPCLogo from '../public/secure_rpc.svg';
import { TelegramIcon, TwitterIcon } from './icons';

export function Footer() {
  return (
    <div className="w-full text-sm">
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          <div className="flex flex-row items-center justify-between md:flex-col md:items-start">
            <>
              <SecureRPCLogo className="logo" />
              <span className="_sr-only">SecureRPC</span>
            </>

            <div className="flex flex-row gap-[10px]">
              <Link href="https://github.com/manifoldfinance" target="_blank">
                <GitHubIcon className="h-5 text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
                <span className="_sr-only">GitHub</span>
              </Link>

              <div className="min-h-full w-[1px] bg-neutral-300 dark:bg-neutral-600" />

              <Link href="https://t.me/manifoldfinance" target="_blank">
                <TelegramIcon className="h-5 text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
                <span className="_sr-only">Telegram</span>
              </Link>

              <div className="min-h-full w-[1px] bg-neutral-300 dark:bg-neutral-600" />

              <Link href="https://twitter.com/foldfinance" target="_blank">
                <TwitterIcon className="h-5 w-5 text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
                <span className="_sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-y-12 md:flex-row">
            <div className="flex w-36 flex-col md:w-48">
              <h4 className="mb-5 font-semibold text-neutral-800 dark:text-neutral-100">
                Resources
              </h4>
              <Link
                href="/docs/getting-started/relay-overview"
                className="mb-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Documentation
              </Link>
              <Link
                href="https://github.com/manifoldfinance/securerpc-frontend/tree/master/examples"
                target="_blank"
                className="mb-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Examples
              </Link>
              <Link
                href="https://github.com/manifoldfinance"
                target="_blank"
                className="mb-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                GitHub
              </Link>
            </div>
            <div className="flex w-36 flex-col md:w-48">
              <h4 className="mb-5 font-semibold text-neutral-800 dark:text-neutral-100">More</h4>
              <Link
                href="/blog"
                className="mb-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Blog
              </Link>
              <Link
                href="https://github.com/manifoldfinance"
                target="_blank"
                className="mb-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Releases
              </Link>
              {/* <Link
                href="/docs/advanced/telemetry"
                className="mb-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Telemetry
              </Link> */}
            </div>
            <div className="flex w-36 flex-col md:w-48">
              <h4 className="mb-5 font-semibold text-neutral-800 dark:text-neutral-100">Connect</h4>
              <Link
                href="mailto:sam@manifoldfinance.com"
                target="_blank"
                className="mb-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Security
              </Link>
              <Link
                href="https://twitter.com/foldfinance"
                target="_blank"
                className="mb-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Twitter
              </Link>
              <Link
                href="https://warpcast.com/"
                target="_blank"
                className="mb-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Farcaster
              </Link>
            </div>
          </div>
        </div>

        <span className="mt-8">© 2024 Manifold Finance, Inc.</span>
      </div>
    </div>
  );
}
