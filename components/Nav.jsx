"use client";

import { Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiFolder,
  HiEnvelope,
} from "react-icons/hi2";

export const links = [
  { name: "início", path: "/", Icon: <HiHome /> },
  { name: "sobre", path: "/about", Icon: <HiUser /> },
  { name: "resumo", path: "/resume", Icon: <HiRectangleGroup /> },
  { name: "portfolio", path: "/portfolio", Icon: <HiFolder /> },
  { name: "contato", path: "/contact", Icon: <HiEnvelope /> },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 text-2xl">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center justify-center group hover:text-accent 
            transition-all duration-500`}
          >
            {/* tooltip */}
            <div className="absolute pt-20 hidden md:group-hover:flex">
              <div className="bg-white relative flex justify-center items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* triangle */}
                <div
                  className="border-solid border-b-white border-b-8
                  border-x-transparent border-x-[8px] absolute border-t-0 -top-2"
                ></div>
              </div>
            </div>

            {/* icon */}
            {link.Icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
