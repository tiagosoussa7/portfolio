"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BottomRightImg = () => {
  const pathname = usePathname();
  return (
    <div key={pathname}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.2, duration: 1.2, ease: "easeInOut" },
        }}
        className="w-[200px] xl:w-[300px] fixed right-0 bottom-0 
        mix-blend-color-dodge animate-pulse duration-600 z-10"
      >
        <Image
          src="/circles.png"
          width={260}
          height={200}
          alt=""
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default BottomRightImg;
