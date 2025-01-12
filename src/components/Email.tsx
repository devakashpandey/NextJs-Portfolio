import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Email = () => {
  return (
    <>
      <motion.div
        className="email"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.85 }}
      >
        <Link href="mailto:devakashpandey04@gmail.com">
          devakashpandey04@gmail.com
        </Link>
      </motion.div>
    </>
  );
};

export default Email;
