"use client";

import { Gochi_Hand, Cousine } from "next/font/google";
import { HiMiniArrowDown } from "react-icons/hi2";
import { motion, AnimatePresence } from "motion/react";
import { RiMenu3Line } from "react-icons/ri";
import Bg from "@/public/Bg1.jpg";
import { useState } from "react";

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
});

const cosuine = Cousine({
  subsets: ["latin"],
  weight: "400",
});

const Landingpage = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div
      className="w-full h-screen flex flex-col relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${Bg.src})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>

      {/* Blur reveal animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="blur-bg"
            className="NavSection backdrop-blur-[10px] h-full absolute right-0 z-30 max-w-full"
            initial={{
              width: 0,
              opacity: 0.6,
            }}
            animate={{
              width: "100%",
              opacity: 1,
              transition: {
                duration: 0.55,
                type: "spring",
                stiffness: 120, // jitter strength
                damping: 12, // smooth bounce
              },
            }}
            exit={{
              width: 0,
              opacity: 0,
              transition: {
                duration: 0.35,
                ease: "easeInOut",
              },
            }}
          >
            <h1
              className="text-white text-3xl p-6"
              onClick={() => setisOpen(false)}
            >
              Close
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar isOpen={isOpen} setisOpen={setisOpen} />
      <Main />
    </div>
  );
};

export default Landingpage;

interface NavbarProp {
  isOpen: boolean;
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setisOpen }: NavbarProp) => {
  return (
    <div className="w-full h-20 flex justify-between items-center text-4xl text-white p-5 z-10">
      <h1 className={gochiHand.className}>Arpit</h1>

      <h1 onClick={() => setisOpen(true)}>
        <RiMenu3Line />
      </h1>
    </div>
  );
};

const Main = () => {
  return (
    <div className="flex-1 flex flex-col justify-between items-center pb-10 z-20">
      <div
        className={`TextDiv mt-30 h-70 w-7xl ${cosuine.className} text-shadow-2xs text-white/80 text-6xl flex justify-center items-center`}
      >
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            animationDelay: 0.23,
          }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
          }}
        >
          Clean Components. No Fluff
        </motion.h1>
      </div>

      <div className="FootDiv w-full h-20 flex items-center justify-end p-4">
        <motion.h1
          initial={{ y: 0 }}
          animate={{
            y: [0, -35, 0, -15, 0, 0], // Jump high, land, jump low, land, wait.
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.3, 0.5, 0.65, 0.8, 1], // Controls the speed of each stage
            repeat: Infinity,
            repeatDelay: 1, // Pauses for 1 second before restarting
          }}
          className="size-15 bg-white rounded-full flex justify-center items-center"
        >
          <HiMiniArrowDown className="size-10" />
        </motion.h1>
      </div>
    </div>
  );
};
