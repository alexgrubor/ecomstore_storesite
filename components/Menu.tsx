"use client";
import Link from "next/link";
import { Category } from "@/types";
import PrimaryNav from "./PrimaryNav";
import NavbarActions from "./NavbarActions";
import ThemeToggle from "./ThemeToggle";
import { useResponsivity } from "@/hooks/responsivity";
import { XIcon, AlignJustify } from "lucide-react";
import { useState } from "react";

interface MenuProps {
  categories: Category[];
}
const Menu = ({ categories }: MenuProps) => {
  const { isMobile } = useResponsivity();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isMobile && (
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">MY STORE</p>
          </Link>
          <PrimaryNav data={categories} />
          <NavbarActions />
          <ThemeToggle />
        </div>
      )}
      {isMobile && (
        <div>
          <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">MY STORE</p>
            </Link>
            <div className="ml-auto flex items-center gap-x-4">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <XIcon size={24} /> : <AlignJustify size={24} />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="flex flex-col items-center gap-y-4 mb-3">
              <PrimaryNav data={categories} />
              <div className="flex gap-2">
                <NavbarActions />
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Menu;
