"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-8">
        <div>
          {/* logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold py-2">
              Luke<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col text-accent">
          {links.map((link, index) => {
            return <Link href={link.path}>{link.name}</Link>;
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
