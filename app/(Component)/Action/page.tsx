'use client';

import Link from 'next/link';
import { RiGlobalLine } from 'react-icons/ri';
import { FaChevronDown } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Page = () => {
  const [isClicked, setisClicked] = useState(false);
  const [isModePublic, setisModePublic] = useState(true);

  const handleSelect = (mode: 'public' | 'private') => {
    setisModePublic(mode === 'public');
    setisClicked(false);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white/50">
      <div className="h-90 w-90">
        <Link href="/">Home</Link>

        <div className="flex h-full w-full flex-col items-center justify-center gap-10">
          <div className="flex h-15 w-72 items-center justify-center">
            <AnimatePresence>
              {isClicked && (
                <motion.div
                  initial={{
                    y: 25,
                    opacity: 0,
                    filter: 'blur(5px)',
                    scale: 0.95,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                    scale: 1,
                  }}
                  exit={{ y: 20, opacity: 0, filter: 'blur(5px)', scale: 0.95 }}
                  transition={{ duration: 0.5, ease: 'backOut' }}
                  className="selector flex h-14 w-64 items-center justify-around rounded-full bg-gray-200 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)]"
                >
                  <div
                    onClick={() => handleSelect('private')}
                    className="group flex h-12 w-30 cursor-pointer items-center justify-center gap-2 rounded-l-full rounded-r-md bg-white transition-colors hover:bg-gray-50"
                  >
                    <IoMdLock
                      className={`text-[18px] transition-colors ${
                        !isModePublic ? 'text-black/80' : 'text-gray-400'
                      }`}
                    />
                    <span
                      className={`font-sans text-[15px] font-semibold transition-colors ${
                        !isModePublic ? 'text-black/80' : 'text-gray-400'
                      }`}
                    >
                      Private
                    </span>
                  </div>

                  <div
                    onClick={() => handleSelect('public')}
                    className="group flex h-12 w-30 cursor-pointer items-center justify-center gap-2 rounded-l-md rounded-r-full bg-white transition-colors hover:bg-gray-50"
                  >
                    <RiGlobalLine
                      className={`text-[18px] transition-colors ${
                        isModePublic ? 'text-black/80' : 'text-gray-400'
                      }`}
                    />
                    <span
                      className={`font-sans text-[15px] font-semibold transition-colors ${
                        isModePublic ? 'text-black/80' : 'text-gray-400'
                      }`}
                    >
                      Public
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            onClick={() => setisClicked((prev) => !prev)}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={`MainButton flex h-12 w-35 cursor-pointer items-center justify-center gap-1 rounded-4xl px-5 text-black/60 ${
              isClicked ? 'bg-gray-200' : 'bg-gray-100'
            } `}
          >
            <div className="relative h-5 w-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={isModePublic ? 'public-icon' : 'private-icon'}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute inset-0 flex items-center justify-center text-lg text-black/50"
                >
                  {isModePublic ? <RiGlobalLine /> : <IoMdLock />}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="relative h-5 w-16 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={isModePublic ? 'public' : 'private'}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute right-0 left-0 text-center font-sans text-sm font-semibold"
                >
                  {isModePublic ? 'Public' : 'Private'}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.span
              animate={{ rotate: isClicked ? 180 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
                mass: 0.6,
              }}
              className="mt-1 text-gray-400"
            >
              <FaChevronDown />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
