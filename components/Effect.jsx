"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Effect = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-secondary"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-accent"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-secondary"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};
export default Effect;
