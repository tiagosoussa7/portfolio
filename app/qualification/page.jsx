"use client";

import { motion } from "framer-motion";
import Cards from "@/components/Cards/Cards";
import Bulb from "@/components/Bulb";

const Qualification = () => {
  return (
    <section className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.2, duration: 1.2, ease: "easeInOut" },
        }}
      >
        <div className="mb-7 text-center font-secondary text-4xl">
          minha jornada profissional
        </div>
        <Cards />
      </motion.div>
      <Bulb />
    </section>
  );
};

export default Qualification;
