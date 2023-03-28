import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 p-4 fixed z-[100] font-neue">
      <div className="flex items-center justify-between w-full h-full px-2 text-3xl">
        <span>ADRIAN</span>
        <div>
          <ul className="hidden md:flex">
            <Link href="#about">
              <li className="ml-10 text-3xl uppercase hover:border-b hover:border-[#1089A7] cursor-pointer">
                ACERCA
              </li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-3xl uppercase hover:border-b hover:border-[#1089A7] cursor-pointer">
                HABILIDADES
              </li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-3xl uppercase hover:border-b hover:border-[#1089A7] cursor-pointer">
                PROYECTOS
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-3xl uppercase hover:border-b hover:border-[#1089A7] cursor-pointer">
                CONTACTO
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
