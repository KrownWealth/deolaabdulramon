
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaMediumM, FaRegEnvelope } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "@/components/ui/sheet";

import { FaSquareXTwitter } from "react-icons/fa6";
import { UserAvatar } from "./Avatar";

const menuLink = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  return (
    <header>
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <RiMenuFill className="w-6 h-6 text-black" />
        </SheetTrigger>
        <SheetContent className="w-full md:max-w-3xl" side="right">
          <SheetHeader className="font-semibold text-2xl items-start justify-start">
            Quick Navigation
          </SheetHeader>
          <ul className="pt-8 flex flex-col gap-4">
            {menuLink.map((menu) => (
              <li key={menu.label}>
                <Link href={menu.href} className="underline">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex space-x-2 pt-8">
            <Link href="https://github.com/KrownWealth"><FaGithub className="w-6 h-6" /></Link>
            <Link href="https://www.linkedin.com/in/adeolaabdulramon/"><FaLinkedinIn className="w-6 h-6" /></Link>
            <Link href="https://x.com/deoladev"><FaSquareXTwitter className="w-6 h-6" /></Link>
            <Link href="https://medium.com/@adeoladeveloper"><FaMediumM className="w-6 h-6" /></Link>
            <Link href="mailto:deolaabdulramon@gmail.com"><FaRegEnvelope className="w-6 h-6" /></Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
