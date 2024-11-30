"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const TopLeftImg = () => {
  const pathname = usePathname();
  return (
    <div key={pathname}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="fixed left-0 top-0 mix-blend-color-dodge opacity-80 z-10 
        w-[200px] xl:w-[600px] animate-pulse"
      >
        <Image
          src="/top-left-img.png"
          width={200}
          height={200}
          priority
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default TopLeftImg;
