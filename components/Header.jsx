import Link from "next/link";

import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Tiago<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border bg-accent border-accent rounded-full flex
          justify-center items-center text-primary text-base hover:bg-primary
          hover:text-accent hover:transition-all duration-500"
          />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
