"use client";

import Link from "next/link";

//components
import Nav from "./Nav";
import Mobile from "./Mobile";
import TopLeftImg from "./TopLeftImg";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-5xl font-secondary">
        <span>Tiago</span> <span className="text-accent">italo</span>{" "}
        <span>.</span>
      </h1>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Logo />
        {/* desktop nav */}
        <div className="hidden md:flex">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          <Mobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
