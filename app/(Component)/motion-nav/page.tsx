'use client';

import { Kodchasan } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
      <div className="flex h-20 w-full items-center justify-center">
        <LayoutGroup>
          <div
            onMouseLeave={() => setHoveredId(null)}
            className={cn(
              'relative flex h-16 w-127.5 items-center justify-evenly rounded-4xl bg-black/90 font-bold text-white p-2',
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
