"use client";

import { AnimatePresence, motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaComment,
  FaUsers,
  FaWrench,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVisualstudio } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Card from "./Card";
import { ScrollArea } from "../ui/scroll-area";

const journey = [
  //graduation
  {
    type: "graduation",
    institution: "Unicesumar",
    logoUrl: "/qualification/logo-unicesumar.png",
    position: "Análise de sistemas",
    duration: "Abr 2022 - Ago 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "graduation",
    institution: "Estácio - Fic",
    logoUrl: "/qualification/ficEstacio-logo.png",
    position: "Banco de dados",
    duration: "Ago 2023 - Dec 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "graduation",
    institution: "Uniasselvi",
    logoUrl: "/qualification/logo-uni.png",
    position: "Sistemas para internet",
    duration: "Fev 2025 - Jun 2027",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },

  //qualification
  {
    type: "courses",
    institution: "Cubos Academy",
    logoUrl: "/resume/cubos-logo.png",
    qualification: "Back-End JavaScript",
    duration: "Ago 2023 - Dec 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "courses",
    institution: "Dio",
    logoUrl: "/resume/logo-dio.png",
    qualification: "Front-end JavaScript",
    duration: "Out 2024 - Dec 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },

  //hard skills
  {
    type: "hard skills",
    name: "Html 5",
    icon: <FaHtml5 />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "hard skills",
    name: "Css 3",
    icon: <FaCss3 />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "hard skills",
    name: "JavaScript",
    icon: <FaJs />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "hard skills",
    name: "Node.js",
    icon: <FaNodeJs />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "hard skills",
    name: "React",
    icon: <FaReact />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "hard skills",
    name: "Tailwind",
    icon: <SiTailwindcss />,
    duration: "apredindo em 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "hard skills",
    name: "Next.js",
    icon: <SiNextdotjs />,
    duration: "apredindo em 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "hard skills",
    name: "Visual Studio Code",
    icon: <SiVisualstudio />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },

  //soft skills
  {
    type: "soft skills",
    name: "Comunicação",
    icon: <FaComment />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "soft skills",
    name: "Trabalho em equipe",
    icon: <FaUsers />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "soft skills",
    name: "Resolução de problemas",
    icon: <FaWrench />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="graduation"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-max mb-[20px]">
          <TabsTrigger value="graduation" className="">
            Graduações
          </TabsTrigger>
          <TabsTrigger value="courses" className="">
            Cursos
          </TabsTrigger>
          <TabsTrigger value="hard skills" className="">
            Hard skills
          </TabsTrigger>
          <TabsTrigger value="soft skills" className="">
            Soft skills
          </TabsTrigger>
        </TabsList>

        {/* graduation */}
        <TabsContent value="graduation" className="w-full">
          <ScrollArea className="h-[480px] p-3">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid">
                  {journey
                    .filter((item) => item.type === "graduation")
                    .map((card, index) => {
                      return <Card key={index} {...card} />;
                    })}
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollArea>
        </TabsContent>

        {/* courses */}
        <TabsContent value="courses" className="w-full">
          <ScrollArea className="h-[480px] p-3">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid">
                  {journey
                    .filter((item) => item.type === "courses")
                    .map((card, index) => {
                      return <Card key={index} {...card} />;
                    })}
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollArea>
        </TabsContent>

        {/*hard skill */}
        <TabsContent value="hard skills" className="w-full">
          <ScrollArea className="h-[480px] p-3">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid">
                  {journey
                    .filter((item) => item.type === "hard skills")
                    .map((card, index) => {
                      return <Card key={index} {...card} />;
                    })}
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollArea>
        </TabsContent>

        {/*soft skill */}
        <TabsContent value="soft skills" className="w-full">
          <ScrollArea className="h-[480px] p-3">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid">
                  {journey
                    .filter((item) => item.type === "soft skills")
                    .map((card, index) => {
                      return <Card key={index} {...card} />;
                    })}
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </>
  );
};
export default Cards;
