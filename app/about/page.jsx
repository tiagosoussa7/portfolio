"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-12">
      <div className="container mx-auto h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.2, duration: 1.2, ease: "easeInOut" },
          }}
        >
          <div className="h-full flex items-center justify-center">
            {/* image + shapes */}
            <div className="hidden lg:flex flex-1 pl-8">
              <div className="relative w-full max-w-[380px]">
                {/* shape */}
                <div
                  className="w-[160px] h-[160px] rounded-tl-[8px] bg-accent absolute -left-5
                -top-5 -z-10"
                ></div>

                {/* image */}
                <div
                  className="rounded-tl-[8px] rounded-tr-[120px] w-[90%] rounded-bl-[40px] rounded-br-[40px] bg-secondary
                lg:min-h-[480px] min-h-[380px] flex items-end justify-center"
                >
                  <Image
                    src="/t1.png"
                    width={350}
                    height={478}
                    quality={100}
                    priority
                    alt=""
                    className="mix-blend-lighten opacity-70 rounded-bl-[40px] rounded-br-[40px]"
                  />
                </div>

                {/* rotating shape */}
                <div
                  className="absolute top-2/4 -right-[65px] flex items-center
              justify-center"
                >
                  <Image src="/img0.png" width={200} height={200} alt="" />

                  <div className="absolute text-center text-secondary">
                    <div className="text-5xl font-bold leading-none">10+</div>
                    <div className="leading-none text-center font-secondary text-2xl">
                      Projetos <br /> completos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* text */}
            <div
              className="text-center lg:text-left w-full lg:w-[50%] mx-auto lg:mx-0
            flex flex-col gap-4"
            >
              <div>
                <h1 className="text-5xl font-secondary">Me chamo Tiago</h1>
                <p className="font-secondary text-2xl text-accent">
                  Frontend developer & Analista de Sistemas
                </p>
              </div>
              <p className="max-w-[680px] mx-auto lg:mx-0 mb-2 text-[14px]">
                Eu crio sites visualmente impressionantes e funcionais usando
                modernas tecnologias de front-end e princípios de design.
                Explore meu trabalho para ver como combino criatividade com
                habilidade técnica para oferecer experiências digitais
                excepcionais.
              </p>

              {/* infor items */}
              <div className="grid grid-cols-2 md:grid-cols-4  gap-10 max-w-max mx-auto lg:mx-0">
                {/* item 1 */}
                <div className="max-w-max">
                  <div className="font-secondary text-accent">Front-end</div>
                  <p className="font-secondary">8 projetos</p>
                </div>
                {/* item 2 */}
                <div className="max-w-max">
                  <div className="font-secondary text-accent">Back-end</div>
                  <p className="font-secondary">3 projetos</p>
                </div>
                {/* item 3 */}
                <div className="max-w-max">
                  <div className="font-secondary text-accent">FullStack</div>
                  <p className="font-secondary">5 projetos</p>
                </div>
                {/* item 4 */}
                <div className="max-w-max">
                  <div className="font-secondary text-accent">Power-Bi</div>
                  <p className="font-secondary">2 projetos</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
