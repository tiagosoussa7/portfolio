"use client";
import Link from "next/link";
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";

const iconsMenu = [
  { icon: <FaHome />, path: "/" },
  { icon: <FaUser />, path: "about" },
  { icon: <FaFolderOpen />, path: "portfolio" },
  { icon: <FaEnvelopeOpen />, path: "contact" },
];
const Nav = ({ containerStyles, iconStyles }) => {
  return (
    <nav className="flex gap-8">
      <div className={containerStyles}>
        {iconsMenu.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
