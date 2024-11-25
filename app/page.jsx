"use client";

import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* informations */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Desenvolvedor de Software</span>
            <h1 className="font-secondary xl:text-7xl text-5xl  border-accent border-y-2 p-2">
              Transformando Idéias <br />
              em <span className="text-accent">Realidade Digital</span>
            </h1>
            <span>Analista e desenvolvedor de sistemas</span>

            {/* button & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-6">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-6 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-2 border-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-primary
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
