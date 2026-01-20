'use client';

import { Kodchasan } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CiMonitor } from 'react-icons/ci';
import { CgSmartphone } from 'react-icons/cg';

const koduchan = Kodchasan({
  subsets: ['latin'],
  weight: '400',
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const NavArray = [
    { id: 0, itemName: 'Home', url: '/motion-nav' },
    { id: 1, itemName: 'Dashboard', url: '/motion-nav' },
    { id: 2, itemName: 'Signup', url: '/motion-nav' },
    { id: 3, itemName: 'About', url: '/motion-nav' },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black p-6 text-white md:hidden ${koduchan.className}`}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="relative z-10 flex w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-12 shadow-2xl backdrop-blur-xl"
        >
          <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
            {/* Pulsing Rings */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full bg-white/10"
            />

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="z-10 text-white"
            >
              <CiMonitor size={48} strokeWidth={1.5} />
            </motion.div>

            <div className="absolute -right-2 -bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-red-400 shadow-lg ring-1 ring-red-500/30 backdrop-blur-md">
              <CgSmartphone size={16} />
            </div>
          </div>

          {/* Text Content */}
          <h2 className="mb-2 text-2xl font-bold tracking-wide">
            Desktop Only
          </h2>

          <p className="mb-6 text-center text-lg text-zinc-400">
            navbar is only for website sowwy dear{' '}
            <span className="inline-block animate-pulse">:(</span>
          </p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-0.5 bg-linear-to-r from-transparent via-white/20 to-transparent"
          />

          <p className="mt-6 text-xs font-light text-zinc-600">
            Please open on a larger screen
          </p>
        </motion.div>
      </div>
      <div className="hidden h-20 w-full items-center justify-center xl:flex">
        <LayoutGroup>
          <div
            onMouseLeave={() => setHoveredId(null)}
            className={cn(
              'relative flex h-16 w-127.5 items-center justify-evenly rounded-4xl bg-black/90 p-2 font-bold text-white',
              'shadow-[inset_2px_2px_4px_rgba(255,255,255,0.25),inset_-2px_-2px_6px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.8)]',
              'overflow-hidden backdrop-blur-sm',
              koduchan.className
            )}
          >
            {/* Default bubble */}
            {hoveredId === null && (
              <motion.span
                layoutId="nav-bubble"
                className="absolute inset-2 -z-10 rounded-3xl bg-white/16"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}

            {NavArray.map((Item) => (
              <Link
                key={Item.id}
                href={Item.url}
                onClick={() => setIsActive(Item.id)}
                onMouseEnter={() => setHoveredId(Item.id)}
                className={cn(
                  'relative z-10 flex h-12 items-center justify-center rounded-3xl px-8 font-semibold',
                  isActive === Item.id ? 'text-black' : 'text-white'
                )}
              >
                {Item.itemName}

                {/* Hover bubble */}
                {hoveredId === Item.id && (
                  <motion.span
                    layoutId="nav-bubble"
                    className="absolute -z-10 h-full w-full rounded-3xl bg-white/16"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {/* Active bubble */}
                {isActive === Item.id && (
                  <motion.span
                    layoutId="main"
                    className="absolute inset-0 -z-10 rounded-4xl bg-linear-to-b from-white to-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </div>
  );
};

export default Navbar;
