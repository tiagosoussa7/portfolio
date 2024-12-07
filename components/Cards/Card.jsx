"use client";

import Image from "next/image";

const Card = ({
  type,
  logoUrl,
  position,
  duration,
  description,
  institution,
  qualification,
  name,
  icon,
}) => {
  return (
    <div className="w-full h-[230px] overflow-hidden flex items-center sticky top-1">
      <div className="w-full h-[200px] border-2 border-accent bg-secondary rounded-[8px]">
        <div className="flex flex-col h-full">
          <div
            className="h=[80px] xl:h-[68px] bg-primary flex flex-col xl:flex-row justify-center
            xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]"
          >
            <div className="flex gap-2">
              <Image
                src="/qualification/hexagon.svg"
                width={16}
                height={16}
                alt=""
              />
              <h3 className="text-lg font-semibold text-accent">
                {type === "graduation"
                  ? position
                  : type === "courses"
                  ? qualification
                  : duration}
              </h3>
            </div>
            <p className="text-base">
              {type !== "graduation" && type !== "courses" ? null : duration}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0">
              {type === "hard skills" || type === "soft skills" ? (
                //render icon for skill
                <div className="w-max xl:w-[300px] h-full relative flex items-center justify-center">
                  <div className="text-5xl text-accent">{icon}</div>
                </div>
              ) : (
                //render the logo for Graduação & Cursos livres
                <div className="relative w-[300px] h-[50px] xl:h-[60px]">
                  <Image src={logoUrl} fill alt="" className="object-contain" />
                </div>
              )}

              <div className="xl:border-l xl:border-accent-hover xl:pl-12 w-full">
                <h3 className="hidden xl:flex font-secondary text-xl mb-2 xl:mb-1">
                  {type === "graduation"
                    ? institution
                    : type === "courses"
                    ? institution
                    : type === "hard skills"
                    ? name
                    : type === "soft skills"
                    ? name
                    : null}
                </h3>
                <p className="max-w-[660px] text-xs">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
