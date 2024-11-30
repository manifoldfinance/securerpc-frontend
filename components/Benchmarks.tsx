import Link from 'next/link';
import * as React from 'react';
import { Card, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import FlashbotsLogo from '../public/flashbots_icon.svg';
import UltraSoundMoney from '../public/bat-own.svg';
import ManifoldLogo from '../public/manifold_logo.svg';

const Benchmarks = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { flat?: boolean }
>(({ className, flat = false, ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn([
        'mb-8 flex w-full flex-col justify-between gap-8 md:flex-row',
        flat ? 'rounded-none md:rounded-lg' : '',
        className,
      ])}
      {...props}
    >
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex flex-grow flex-col border-neutral-200 dark:border-neutral-50/20 lg:border-r">
          <div className="flex flex-col px-4 pt-6 md:px-8 md:pt-8">
            <CardTitle className="mb-6">Tachometer</CardTitle>
            <div className="mb-3 flex w-full flex-row justify-start gap-3">
              
              <div className="bg-disco3 h-[33px] w-[calc((100%-75px)*0.525)] rounded-[4px]">
              <ManifoldLogo className="ml-[10px]" />
              </div>
              
              <p className="pt-[2px]">338.47ms
              </p>
            </div>

            <div className="mb-5 flex w-full flex-row justify-start gap-3">
              <div className="flex h-[34px] w-[calc(100%-75px)] items-center rounded-[4px] bg-neutral-400 dark:bg-neutral-700">
               <FlashbotsLogo className="ml-[10px]" />
              </div>
              <p className="pt-[2px]">568.79ms              </p>
            </div>

  {/** 
            <div className="mb-5 flex w-full flex-row justify-start gap-3">
              <div className="flex h-[34px] w-[calc(100%-75px)] items-center rounded-[4px] bg-neutral-400 dark:bg-neutral-700">
      
              </div>
              <p className="pt-[2px]">4m 40s</p>
            </div>
 */}
    
  {/**
            <div className="mb-5 flex w-full flex-row justify-start gap-3">
              <div className="flex h-[34px] w-[calc(100%-75px)] items-center rounded-[4px] bg-neutral-400 dark:bg-neutral-700">
                <UltraSoundMoney className="ml-[10px]" />
              </div>
              <p className="pt-[2px]">3m 40s</p>
            </div>
             */}
          </div>

          <div className="grid grid-cols-4 md:grid-cols-5">
            <div className="col-span-1 border-b border-neutral-200 py-2 pl-4 text-sm text-neutral-500 dark:border-neutral-50/20 md:pl-8" />
            <div className="col-span-1 border-b border-neutral-200 py-2 pl-3 text-sm dark:border-neutral-50/20">
              Lower (ms)
            </div>
            <div className="col-span-1 border-b border-neutral-200 py-2 pl-3 text-sm dark:border-neutral-50/20">
              Upper (ms)
            </div>
            <div className="col-span-1 hidden border-b border-neutral-200 py-2 pl-3 text-sm dark:border-neutral-50/20 md:block">
              Min (ms)
            </div>
            <div className="col-span-1 border-b border-neutral-200 py-2 pl-3 text-sm dark:border-neutral-50/20">
              Max (ms)
            </div>

            <div className="bg-disco3/10 text-disco3 col-span-1 border-b border-r border-neutral-200 py-2 pl-4 dark:border-neutral-50/20 md:pl-8">
              SecureRPC
            </div>
            <div className="bg-disco3/10 text-disco3 col-span-1 border-b border-r border-neutral-200 py-2 pl-3 dark:border-neutral-50/20">
              356.39ms
            </div>
            <div className="bg-disco3/10 text-disco3 col-span-1 border-b border-r border-neutral-200 py-2 pl-3 dark:border-neutral-50/20">
              369.98ms
            </div>
            <div className="bg-disco3/10 text-disco3 col-span-1 hidden border-b border-r border-neutral-200 py-2 pl-3 dark:border-neutral-50/20 md:block">
              195.15ms
            </div>
            <div className="bg-disco3/10 text-disco3 col-span-1 border-b border-neutral-200 py-2 pl-3 dark:border-neutral-50/20">
              368.41ms
            </div>

            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-4 dark:border-neutral-50/20 max-lg:border-b md:pl-8 lg:pb-6">
              Flashbots
            </div>
            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
              568.79ms
            </div>
            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
            570.78ms 
            </div>
            <div className="col-span-1 hidden border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b md:block lg:pb-6">
              560.08ms
            </div>
            <div className="col-span-1 border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
             605.16ms
            </div>
{/** 
            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-4 dark:border-neutral-50/20 max-lg:border-b md:pl-8 lg:pb-6">
              UltraSoundMoney
            </div>
            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
            338.47ms 
            </div>
            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
             405.16ms
            </div>
            <div className="col-span-1 hidden border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b md:block lg:pb-6">
            346.36ms
            </div>
            <div className="col-span-1 border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
            605.16ms
            </div>

            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-4 dark:border-neutral-50/20 max-lg:border-b md:pl-8 lg:pb-6">
              Aestus Relay
            </div>
            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
              5m 28s
            </div>
            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
              1m 15s
            </div>
            <div className="col-span-1 hidden border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b md:block lg:pb-6">
              99%
            </div>
            <div className="col-span-1 border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
              167k
            </div>

            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-4 dark:border-neutral-50/20 max-lg:border-b md:pl-8 lg:pb-6">
              Bloxroute
            </div>
            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
              5m 28s
            </div>
            <div className="col-span-1 border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
              1m 15s
            </div>
            <div className="col-span-1 hidden border-r border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b md:block lg:pb-6">
              99%
            </div>
            <div className="col-span-1 border-neutral-200 py-2 pb-3 pl-3 dark:border-neutral-50/20 max-lg:border-b lg:pb-6">
              167k
            </div>
 */}
          </div>
        </div>
{/**           
 
 This metric has two main components. First, it directly models user-perceived availability and avoids the
bias in commonly used availability metrics. Second, by simultaneously calculating the availability metric over many
windows it can readily distinguish between many short periods of unavailability and fewer but longer periods of unavailability.

*/}
        <div className="flex flex-col p-4 md:p-6 lg:max-w-[22ch]">
          <p className="mb-4 text-sm text-neutral-700 dark:text-neutral-200">
          Windowed user-uptime. <br />
          This calculates latency and availability metric over many
          windows it can readily distinguish between many short periods of unavailability and fewer but longer periods of unavailability.
          </p>
          <Link href="#" target="_blank" className="text-disco3 text-sm hover:text-disco3-50/90">
            Find out more →
          </Link>
        </div>
      </div>
    </Card>
  );
});
Benchmarks.displayName = 'Benchmarks';

export { Benchmarks };
