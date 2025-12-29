'use client';

import { Gochi_Hand, Cousine } from 'next/font/google';
import { HiMiniArrowDown } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine, RiArrowRightUpLine } from 'react-icons/ri';
import Bg from '@/public/Bg1.jpg';
import { useState } from 'react';
import Link from 'next/link';

// --- Fonts ---
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  weight: '400',
});

const cousine = Cousine({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function LandingPage() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div
      className="relative flex h-screen w-full flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg.src})` }}
    >
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      <MenuOverlay isOpen={isOpen} setIsOpen={setisOpen} />

      <Navbar setisOpen={setisOpen} />

      <HeroSection />
    </div>
  );
}

const MenuOverlay = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) => {
  const ComponentsLink = [
    { Id: 1, Name: 'Create', url: 'Create' },
    { Id: 2, Name: 'Draft', url: 'Pencil' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="blur-bg"
          className="fixed inset-y-0 right-0 z-50 flex flex-col border-l border-white/20 bg-black/40 shadow-2xl backdrop-blur-xl"
          initial={{ x: '100%' }}
          animate={{
            x: '0%',
            transition: { type: 'spring', damping: 25, stiffness: 200 },
          }}
          exit={{
            x: '100%',
            transition: { ease: 'easeInOut', duration: 0.3 },
          }}
          style={{ width: '100%', maxWidth: '400px' }}
        >
          <div className="flex w-full items-center justify-between border-b border-white/10 p-6 md:p-8">
            <span
              className={`${cousine.className} text-xs tracking-widest text-white/50`}
            >
              MENU_SYSTEM
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-white transition-all hover:rotate-90 hover:bg-white/10 hover:text-red-400"
            >
              <RiCloseLine className="text-3xl" />
            </button>
          </div>

          <div className={`flex-1 overflow-y-auto p-8 ${cousine.className}`}>
            <div className="mb-8 w-fit">
              <h1 className="mb-2 text-3xl font-bold text-white">Components</h1>
              <div className="h-1 w-full bg-cyan-400"></div>
            </div>

            <div className="flex flex-col gap-6">
              {ComponentsLink.map((comp, index) => (
                <Link
                  key={comp.Id}
                  href={comp.url}
                  onClick={() => setIsOpen(false)}
                  className="group flex w-full items-start justify-between"
                >
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-bold text-cyan-400/60 transition-colors group-hover:text-cyan-400">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>

                      {/* Link Name */}
                      <h2 className="text-xl text-white/80 transition-colors group-hover:text-white">
                        {comp.Name}
                      </h2>
                    </div>

                    <div className="mt-1 ml-7 h-0.5 w-0 bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full"></div>
                  </div>

                  <RiArrowRightUpLine className="-translate-x-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div className={`border-t border-white/10 p-6 ${cousine.className}`}>
            <p className="text-center text-xs text-white/30">
              DESIGN SYSTEM V1.0
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({
  setisOpen,
}: {
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <nav className="z-20 flex h-24 w-full items-center justify-between px-6 md:px-10">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`${gochiHand.className} text-4xl text-white select-none md:text-5xl`}
      >
        Arpit
      </motion.h1>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setisOpen(true)}
        className="rounded-full p-2 text-4xl text-white transition-colors hover:bg-white/10"
      >
        <RiMenu3Line />
      </motion.button>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4">
      <div className="flex flex-1 items-center justify-center">
        <div
          className={`${cousine.className} max-w-5xl text-center text-white/90 drop-shadow-lg`}
        >
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl leading-tight font-bold md:text-6xl lg:text-7xl"
          >
            Clean Components. <br />
            <span className="text-cyan-300">No Fluff.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-sm tracking-widest text-white/60 uppercase md:text-lg"
          >
            Minimalist Design System
          </motion.p>
        </div>
      </div>

      <div className="flex w-full justify-end px-6 pb-10 md:px-10">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -20, 0],
            opacity: 1,
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: { duration: 0.5 },
          }}
          whileHover={{ scale: 1.1, cursor: 'pointer' }}
          className="flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black"
        >
          <HiMiniArrowDown className="size-8" />
        </motion.div>
      </div>
    </main>
  );
};
