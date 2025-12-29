'use client';
import { motion, useAnimate } from 'motion/react';
import Link from 'next/link';
import { RiArrowLeftLine } from 'react-icons/ri';

const Page = () => {
  const [scope, animate] = useAnimate();
  const StartAnimation = async () => {
    // ---------------- CONFIG ----------------
    const BASE_LEFT = 50; // matches your CSS left
    const DISTANCE = 40; // max line width / pencil travel
    const HALF = DISTANCE / 2;

    await animate(
      '.line',
      {
        width: '0px',
        left: `${BASE_LEFT}px`,
        opacity: 0,
      },
      { duration: 0 }
    );

    // 1. Tilt
    await animate('.pencil', { rotateZ: -15 }, { delay: 0.6 });

    await Promise.all([
      animate('.pencil', { x: HALF }),
      animate(
        '.line',
        { width: `${40}px`, opacity: 1 },
        { delay: 0.1, ease: 'easeInOut' }
      ),
    ]);

    await Promise.all([
      animate('.pencil', { x: DISTANCE }, { duration: 0.2, ease: 'linear' }),
      animate(
        '.line',
        {
          width: '0px',
          left: `${BASE_LEFT + DISTANCE}px`,
        },
        {
          ease: 'easeInOut',
        }
      ),
    ]);

    await Promise.all([
      animate('.pencil', { x: HALF }),
      animate(
        '.line',
        {
          width: '38px',
          left: `${BASE_LEFT + HALF + 18}px`,
        },
        { delay: 0.14 }
      ),
    ]);

    await Promise.all([
      animate('.pencil', { x: 0 }),
      animate('.line', {
        width: '0px',
        left: `${BASE_LEFT}px`,
      }),
    ]);

    await animate('.pencil', { rotateZ: 0 });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-200">
      <div className="absolute top-6 left-6 z-50">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-neutral-600 shadow-sm transition-colors hover:border-neutral-300 hover:text-black"
          >
            <RiArrowLeftLine />
            <span className="text-sm font-medium">Home</span>
          </motion.div>
        </Link>
      </div>
      <motion.div
        onMouseEnter={StartAnimation}
        ref={scope}
        whileHover={{
          scale: [0.85, 0.85, 0.85, 1, 1.25, 1.25, 1],
        }}
        transition={{
          duration: 0.4,
          ease: 'anticipate',
        }}
        className="group relative flex h-28 w-82 cursor-pointer items-center justify-evenly rounded-2xl bg-gray-300/50 px-11 transition-all hover:bg-white/30"
      >
        <svg
          width="60"
          height="55"
          viewBox="0 0 77 75"
          xmlns="http://www.w3.org/2000/svg"
          className="pencil origin-bottom-left text-gray-400 transition-colors duration-300 group-hover:text-black/80"
        >
          <path
            d="M56.4802 1.83512C57.6561 0.660068 59.2504 0 60.9128 0C62.5751 0 64.1695 0.660068 65.3453 1.83512L74.6118 11.1016C75.7869 12.2775 76.447 13.8718 76.447 15.5342C76.447 17.1966 75.7869 18.7909 74.6118 19.9668L64.6036 29.975L64.5606 30.0216L25.7603 67.0554C25.0514 67.733 24.1935 68.235 23.2555 68.521L3.46475 74.5409C2.99937 74.6812 2.50465 74.6926 2.03328 74.574C1.56192 74.4554 1.13155 74.2111 0.788002 73.8673C0.444148 73.5237 0.199902 73.0934 0.0812715 72.622C-0.0373589 72.1506 -0.0259321 71.6559 0.114335 71.1905L6.10925 51.4822C6.42367 50.4506 6.9988 49.5176 7.77909 48.7732L46.4934 11.8183L56.4802 1.83512ZM11.4914 52.6611C11.3806 52.7683 11.2981 52.9012 11.2513 53.0481L6.722 67.9333L21.6896 63.3789C21.824 63.3375 21.9467 63.2651 22.0479 63.1675L58.8595 28.0293L48.3245 17.4979L11.4914 52.6611ZM62.7044 24.2775L70.8135 16.172C70.8969 16.0888 70.9631 15.99 71.0083 15.8811C71.0534 15.7723 71.0767 15.6556 71.0767 15.5378C71.0767 15.42 71.0534 15.3033 71.0083 15.1944C70.9631 15.0856 70.8969 14.9868 70.8135 14.9035L61.547 5.63704C61.4638 5.55361 61.3649 5.48742 61.2561 5.44226C61.1473 5.3971 61.0306 5.37385 60.9128 5.37385C60.7949 5.37385 60.6782 5.3971 60.5694 5.44226C60.4606 5.48742 60.3617 5.55361 60.2785 5.63704L52.173 13.7425L62.7044 24.2775Z"
            fill="currentColor"
          />
        </svg>
        {/* Line */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          className="line absolute bottom-7 left-20 h-1 w-[27px] origin-left rounded-full bg-black"
        ></motion.div>

        <h1 className="font-sans text-5xl font-semibold text-gray-400 transition-colors duration-300 group-hover:text-black/80">
          Draft
        </h1>
      </motion.div>
    </div>
  );
};

export default Page;
