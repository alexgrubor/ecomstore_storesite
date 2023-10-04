"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface PrimaryNavProps {
  data: Category[];
  className?: string;
}

const PrimaryNav = ({ data, className }: PrimaryNavProps) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className={"mx-6 flex items-center gap-3"}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className=" font-medium transition-colors hover:text-black">
            Categories
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {routes.map((route) => (
            <DropdownMenuItem key={route.href} onClick={() => {}}>
              <Link href={route.href} className="text-sm font-medium">
                {route.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href="/about">About Us</Link>
      <Link href="/contact">Contact Us</Link>
    </nav>
  );
};
export default PrimaryNav;
