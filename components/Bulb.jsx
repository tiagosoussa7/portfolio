"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Bulb = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      className="fixed -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse z-10 w-[200px] xl:w-[260px]"
    >
      <Image
        src="/bulb.png"
        width={260}
        height={260}
        className="w-full h-full"
        alt=""
      />
    </motion.div>
  );
};

export default Bulb;
