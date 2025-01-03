"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "./ui/badge";

const CertificateItems = ({ href, category, img, title }) => {
  return (
    <Link href="/" className="group">
      <div className="w-full h-[200px] p-8 rounded-[30px] flex items-center justify-center relative overflow-hidden bg-[#f4f4f4]">
        <Badge className="bg-primary z-40 absolute top-6 left-6 capitalize">
          {category}
        </Badge>
        <Image
          src={img}
          fill
          priority
          quality={100}
          className="object-cover group-hover:scale-105 transition-all duration-700"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex p-2">
          <h2 className="font-secondary sm:text-[16px] text-xs  text-accent">
            {title}
          </h2>
        </div>
        <button className="bg-accent text-primary rounded-full w-[28px] h-[28px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
          <FiArrowRight className="text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export default CertificateItems;
