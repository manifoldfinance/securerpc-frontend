import { Slot } from '@radix-ui/react-slot';
import Link from 'next/link';

import { Benchmarks } from '@/components/Benchmarks';
import { buttonDefaults } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { CommandLineIcon, CursorArrowRaysIcon, ServerStackIcon, ShieldCheckIcon } from './icons';

export function Home() {
  return (
    <main className="relative w-full max-w-full">
      <div className="mx-auto mt-4 max-w-[1180px] px-6 md:mt-16">
        <div className="hero-texture mb-6 flex w-full flex-col justify-between gap-8 rounded-lg p-4 text-neutral-950 shadow-sm dark:text-neutral-50 md:flex-row md:p-8">
          <div className="flex max-w-[540px] flex-col items-start space-y-1.5">
            <p className="pb-4 text-neutral-500 dark:text-neutral-400">
              <strong>SecureRPC</strong>
            </p>
            <h1 className="pb-4 text-4xl font-semibold tracking-tight">
              Non-censoring, censorship-resistant, and permissionless for Ethereum
            </h1>
            <p>Mempool me harder daddy.</p>
          </div>

          <div className="flex w-full flex-row items-end justify-center md:w-[unset]">
            <div className="w-full space-y-4 md:w-[unset]">
              <div className="flex flex-row gap-4">
                <Slot
                  className={cn([
                    buttonDefaults,
                    'h-10 px-4 py-2',
                    'bg-disco3 flex-grow text-neutral-50 hover:bg-disco3-200/90 md:px-10',
                  ])}
                >
                  <Link href="/docs/getting-started/relay-overview">Get started</Link>
                </Slot>
                <Slot
                  className={cn([
                    buttonDefaults,
                    'h-10 px-4 py-2',
                    'bg-white bg-opacity-20 text-neutral-900 hover:bg-opacity-30 dark:text-neutral-50',
                  ])}
                >
                  <Link href="/docs/why">Dogma</Link>
                </Slot>
              </div>
              <div className="flex flex-row justify-center">
                <Slot
                  className={cn([
                    buttonDefaults,
                    'h-10 px-4 py-2',
                    'flex-grow border border-neutral-200/30 text-neutral-900 hover:bg-neutral-100/30 dark:text-neutral-50',
                  ])}
                >
                  <Link href="https://github.com/manifoldfinance" target="_blank">
                    View on GitHub
                  </Link>
                </Slot>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap justify-between gap-y-4">
          <Card className="w-[calc(25%-12px)] max-lg:w-[calc(50%-8px)] max-sm:w-full">
            <CardHeader className="items-start p-4 md:p-8">
              <div className="mb-5 rounded-[4px] bg-neutral-200 p-2 dark:bg-neutral-800">
                <ServerStackIcon />
              </div>
              <CardTitle>Performant</CardTitle>
              <CardDescription>
               Advanced performance optimizations for all users on <strong>SecureRPC</strong>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-[calc(25%-12px)] max-lg:w-[calc(50%-8px)] max-sm:w-full">
            <CardHeader className="items-start p-4 md:p-8">
              <div className="mb-5 rounded-[4px] bg-neutral-200 p-2 dark:bg-neutral-800">
                <ShieldCheckIcon />
              </div>
              <CardTitle>Trade Execution</CardTitle>
              <CardDescription>
                Transaction settlement<strong>guaranteed</strong> through inclusion preconfirmations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-[calc(25%-12px)] max-lg:w-[calc(50%-8px)] max-sm:w-full">
            <CardHeader className="items-start p-4 md:p-8">
              <div className="mb-5 rounded-[4px] bg-neutral-200 p-2 dark:bg-neutral-800">
                <CommandLineIcon />
              </div>
              <CardTitle>Pre Trade Privacy</CardTitle>
              <CardDescription>
                Segregated mempools and zero trust{' '}
                <strong>Industry-leading privacy protection</strong>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-[calc(25%-12px)] max-lg:w-[calc(50%-8px)] max-sm:w-full">
            <CardHeader className="items-start p-4 md:p-8">
              <div className="mb-5 rounded-[4px] bg-neutral-200 p-2 dark:bg-neutral-800">
                <CursorArrowRaysIcon />
              </div>
              <CardTitle>Privacy First</CardTitle>
              <CardDescription>
                From trading to IP logging,
                <strong>no exceptions</strong>.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Benchmarks />
      </div>

      <div className="h-48" />
    </main>
  );
}
