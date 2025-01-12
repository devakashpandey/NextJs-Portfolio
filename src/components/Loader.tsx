"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1, y: 5 }}
          animate={{ opacity: 0, y: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 2 }}
        >
          <motion.div
            exit={{ scale: 0 }}
            key="motiondivleave"
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
          >
            {" "}
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <title>Logo</title>
              <g>
                <g id="A" transform="translate(31.000000,29.000000) scale(1.6)">
                  <svg width="800px" height="800px">
                    {" "}
                    <motion.path
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      exit={{
                        scale: 2,
                      }}
                      fill="#32e6bc"
                      d="M12 2L3 22h6l1-4h4l1 4h6L12 2zM10.25 16l1.75-7l1.75 7h-3.5z"
                      width="800px"
                      height="800px"
                    />
                  </svg>
                </g>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  exit={{
                    scale: 2,
                  }}
                  stroke="#32e6bc"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
                />
              </g>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
