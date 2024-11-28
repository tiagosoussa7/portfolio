"use client";

import { AnimatePresence, motion } from "framer-motion";

import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVisualstudio } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Card from "./Card";
import { ScrollArea } from "../ui/scroll-area";

const journey = [
  //graduation
  {
    type: "graduation",
    institution: "Unicesumar",
    logoUrl: "/resume/unicesumar-logo.png",
    position: "Anásile e desenvolvimento de sistemas",
    duration: "Abr 2022 - Ago 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "graduation",
    institution: "Estácio - Fic",
    logoUrl: "/resume/ficEstacio-logo.png",
    position: "Banco de dados",
    duration: "Ago 2023 - Dec 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },

  //qualification
  {
    type: "courses",
    institution: "Cubos Academy",
    logoUrl: "/resume/cubos-logo.png",
    qualification: "Desenvolvedor Back-End JavaScript",
    duration: "Ago 2023 - Dec 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "courses",
    institution: "Dio",
    logoUrl: "/resume/dio-logo.png",
    qualification: "Desenvolvedor Front-end JavaScript",
    duration: "Out 2024 - Dec 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },

  //skills
  {
    type: "skills",
    name: "Html 5",
    icon: <FaHtml5 />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "skills",
    name: "Css 3",
    icon: <FaCss3 />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "skills",
    name: "JavaScript",
    icon: <FaJs />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "skills",
    name: "Node.js",
    icon: <FaNodeJs />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "skills",
    name: "React",
    icon: <FaReact />,
    duration: "apredindo em 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "skills",
    name: "Tailwind",
    icon: <SiTailwindcss />,
    duration: "apredindo em 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "skills",
    name: "Next.js",
    icon: <SiNextdotjs />,
    duration: "apredindo em 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in earum assumenda atque cum nisi iste distinctio, aliquid.",
  },
  {
    type: "skills",
    name: "Visual Studio Code",
    icon: <SiVisualstudio />,
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
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="graduation">Graduações</TabsTrigger>
          <TabsTrigger value="courses">Cursos</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        {/* graduation */}
        <TabsContent value="graduation" className="w-full">
          <ScrollArea className="h-[460px]">
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
          <ScrollArea className="h-[460px]">
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

        {/* skill */}
        <TabsContent value="skills" className="w-full">
          <ScrollArea className="h-[460px]">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid">
                  {journey
                    .filter((item) => item.type === "skills")
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
