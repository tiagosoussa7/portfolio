"use client";

import Link from "next/link";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-5xl font-secondary">
            <span className="text-accent">Tiago</span> <span>italo</span>{" "}
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="md:hidden">mobile</div>
      </div>
    </header>
  );
};

export default Header;
