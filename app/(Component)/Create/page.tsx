'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  FaPlus,
  FaXmark,
  FaRocket,
  FaListCheck,
  FaBullseye,
  FaFlag,
  FaBell,
} from 'react-icons/fa6';

const Page = () => {
  const [isClicked, setisClicked] = useState(false);

  // Data for the top row
  const upperRow = [
    { name: 'Project', icon: <FaRocket /> },
    { name: 'Task', icon: <FaListCheck /> },
    { name: 'Goal', icon: <FaBullseye /> },
  ];

  // Data for the bottom row
  const lowerRow = [
    { name: 'Milestone', icon: <FaFlag /> },
    { name: 'Reminder', icon: <FaBell /> },
  ];

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="relative flex h-[500px] w-full items-center justify-center">
        {isClicked ? (
          <motion.div
            layoutId="CreateCard"
            className="relative flex h-[340px] w-[360px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          >
            
            <div className="flex w-full items-center justify-between p-6 pb-4">
              <div className="flex items-center gap-x-3">
                <motion.div
                  layoutId="icon-plus"
                  className="flex items-center justify-center text-gray-400"
                  animate={{ opacity: 0, rotate: 45 }}
                >
                  <FaPlus size={20} />
                </motion.div>

                <motion.h1
                  layoutId="text-create"
                  className="text-2xl font-bold text-gray-500"
                >
                  Create
                </motion.h1>
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setisClicked(false);
                }}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
              >
                <FaXmark />
              </motion.button>
            </div>

            {/* Content Body - Gray Area */}
            <div className="flex flex-1 flex-col gap-y-2 px-4 pb-4">
              <div className="flex h-full w-full flex-col rounded-3xl p-2">
                {/* Upper Row */}
                <div className="flex h-1/2 w-full items-center justify-evenly">
                  {upperRow.map((item) => (
                    <div
                      key={item.name}
                      className="group flex h-20 w-20 cursor-pointer flex-col items-center justify-center gap-y-2 rounded-2xl transition-all hover:bg-gray-100 hover:shadow-sm"
                    >
                      <span className="text-2xl text-gray-500 transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-xs font-medium text-gray-500 transition-colors group-hover:text-gray-800">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Lower Row */}
                <div className="flex h-1/2 w-full items-center justify-evenly">
                  {lowerRow.map((item) => (
                    <div
                      key={item.name}
                      className="group flex h-20 w-20 cursor-pointer flex-col items-center justify-center gap-y-2 rounded-2xl transition-all hover:bg-gray-100 hover:shadow-sm"
                    >
                      <span className="text-2xl text-gray-500 transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-xs font-medium text-gray-500 transition-colors group-hover:text-gray-800">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            layoutId="CreateCard"
            onClick={() => setisClicked(true)}
            className="flex h-16 w-48 cursor-pointer items-center justify-center gap-x-3 rounded-full bg-white text-gray-700 hover:bg-gray-50"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          >
            <motion.div
              layoutId="icon-plus"
              className="flex items-center justify-center"
            >
              <FaPlus size={18} />
            </motion.div>
            <motion.h1 layoutId="text-create" className="text-lg font-semibold">
              Create
            </motion.h1>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Page;
